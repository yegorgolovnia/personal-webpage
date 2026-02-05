
export const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&0x";

export interface QueueItem {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
}

export class TextScramble {
    el: HTMLElement;
    chars: string;
    queue: QueueItem[];
    frame: number;
    frameRequest: number | null;
    originalText: string;

    constructor(el: HTMLElement) {
        this.el = el;
        this.chars = CHARS;
        this.queue = [];
        this.frame = 0;
        this.frameRequest = null;

        // Persist original text source of truth
        if (this.el.dataset.originalText) {
            this.originalText = this.el.dataset.originalText;
        } else {
            this.originalText = el.innerText;
            this.el.dataset.originalText = this.originalText;
        }
    }

    setText(newText: string, mode: "normal" | "encrypt" = "normal") {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 8);
            const end = start + Math.floor(Math.random() * 15);
            this.queue.push({ from, to, start, end });
        }

        if (this.frameRequest) cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update(mode);
    }

    update(mode: "normal" | "encrypt") {
        let output = "";
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];

            // WHITESPACE PRESERVATION
            if (/\s/.test(to)) {
                output += to;
                complete++;
                continue;
            }

            if (this.frame >= end) {
                complete++;

                if (mode === "encrypt") {
                    if (!char || Math.random() < 0.1) {
                        char = this.chars[Math.floor(Math.random() * this.chars.length)];
                        this.queue[i].char = char;
                    }
                    const colorClass = Math.random() > 0.5 ? "dud-rgb" : "dud-mono";
                    output += `<span class="${colorClass}">${char}</span>`;
                } else {
                    output += to;
                }
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.chars[Math.floor(Math.random() * this.chars.length)];
                    this.queue[i].char = char;
                }
                const colorClass = Math.random() > 0.6 ? "dud-rgb" : "dud-mono";
                output += `<span class="${colorClass}">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            if (mode === "encrypt") {
                // Holding state, maybe continue animating sluggishly?
                // For now, match original behavior (stop loop but keep encrypted text)
            } else {
                // Done
            }
        } else {
            this.frameRequest = requestAnimationFrame(() => this.update(mode));
            this.frame++;
        }
    }

    restore() {
        this.setText(this.originalText, "normal");
    }
}

// Canvas Glitch Logic
export class GlitchCanvas {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    stretchFactor: number;
    animRequest: number | null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.stretchFactor = 0;
        this.animRequest = null;

        this.resize();
        window.addEventListener("resize", () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    draw() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.stretchFactor > 0.01) {
            const chunks = Math.floor(180 * this.stretchFactor);
            for (let i = 0; i < chunks; i++) {
                const h = Math.random() * 60 * this.stretchFactor + 2;
                const w = Math.random() * this.canvas.width * 0.8 * this.stretchFactor + 30;
                const x = Math.random() * this.canvas.width - w / 2;
                const y = Math.random() * this.canvas.height;
                const rand = Math.random();

                // SUBTLER COLORS
                if (rand > 0.95)
                    this.ctx.fillStyle = `rgba(255, 255, 255, ${0.5 * this.stretchFactor})`;
                else if (rand > 0.9)
                    this.ctx.fillStyle = `rgba(255, 100, 100, ${0.4 * this.stretchFactor})`;
                else if (rand > 0.85)
                    this.ctx.fillStyle = `rgba(100, 255, 100, ${0.4 * this.stretchFactor})`;
                else if (rand > 0.8)
                    this.ctx.fillStyle = `rgba(100, 100, 255, ${0.4 * this.stretchFactor})`;
                else if (rand > 0.75)
                    this.ctx.fillStyle = `rgba(100, 255, 255, ${0.4 * this.stretchFactor})`;
                else this.ctx.fillStyle = `rgba(0, 0, 0, ${0.8 * this.stretchFactor})`;

                this.ctx.fillRect(x, y, w, h);
            }
            this.stretchFactor *= 0.94;
            this.animRequest = requestAnimationFrame(() => this.draw());
        } else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    triggerEntrance() {
        this.stretchFactor = 1.0;
        if (this.animRequest) cancelAnimationFrame(this.animRequest);
        this.draw();
    }

    triggerExit() {
        this.stretchFactor = 1.0; // Blast it
        if (this.animRequest) cancelAnimationFrame(this.animRequest);
        this.draw();
    }

    setStretch(val: number) {
        this.stretchFactor = val;
        if (this.animRequest) cancelAnimationFrame(this.animRequest);
        this.draw();
    }
}
