export class TimeUnit {

    unit: string;
    time: number;

    constructor(time: number) {
        this.time = time;
        this.unit = 'Seconds';

        if (this.time % 60 == 0) {
            this.unit = 'Minutes';
            this.time = this.time / 60;
        }
        if (this.time % 60 == 0) {
            this.unit = 'Hours';
            this.time = this.time / 60;
        }
        if (this.time % 24 == 0) {
            this.unit = 'Days';
            this.time = this.time / 24;
        }

        if (this.time == 0) {
            this.unit = 'Seconds';
        }
    }

    toSeconds(): number {
        switch (this.unit) {
            case 'Seconds': return this.time;
            case 'Minutes': return this.time * 60;
            case 'Hours': return this.time * 3600;
            case 'Days': return this.time * 86400;
            default: throw 'invalid unit ' + this.unit;
        }
    }

    static autoUnit(time: number): string {
        if (!time) {
            return 'Hours';
        }

        let unit = 'Seconds';
        if (time % 60 == 0) {
            unit = 'Minutes';
            time = time / 60;
        }
        if (time % 60 == 0) {
            unit = 'Hours';
            time = time / 60;
        }
        if (time % 24 == 0) {
            unit = 'Days';
            time = time / 24;
        }
        return unit;
    }

    static toSeconds(time: number, unit: string): number {
        switch (unit) {
            case 'Seconds': return time;
            case 'Minutes': return time * 60;
            case 'Hours': return time * 3600;
            case 'Days': return time * 86400;
            default: alert("exception"); throw 'invalid unit ' + unit;
        }
    }

    static toUnit(time: number, unit: string): number {
        switch (unit) {
            case 'Seconds': return time;
            case 'Minutes': return Math.ceil(time / 60);
            case 'Hours': return Math.ceil(time / 3600);
            case 'Days': return Math.ceil(time / 86400);
            default: throw 'invalid unit ' + unit;
        }
    }

    static convert(time: number, from: string, to: string): number {
        var seconds = this.toSeconds(time, from);
        return this.toUnit(seconds, to);
    }
}
