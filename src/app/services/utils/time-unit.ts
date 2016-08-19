export enum UnitTime {
    Seconds,
    Minutes,
    Hours,
    Days
}

export class TimeUnit {

    unit: UnitTime;
    time: number;

    constructor(time: number) {
        this.time = time;
        this.unit = UnitTime.Seconds;

        if (this.time % 60 == 0) {
            this.unit = UnitTime.Minutes;
            this.time = this.time / 60;
        }
        if (this.time % 60 == 0) {
            this.unit = UnitTime.Hours;
            this.time = this.time / 60;
        }
        if (this.time % 24 == 0) {
            this.unit = UnitTime.Days;
            this.time = this.time / 24;
        }

        if (this.time == 0) {
            this.unit = UnitTime.Seconds;
        }
    }

    toSeconds(): number {
        switch (this.unit) {
            case UnitTime.Seconds: return this.time;
            case UnitTime.Minutes: return this.time * 60;
            case UnitTime.Hours: return this.time * 3600;
            case UnitTime.Days: return this.time * 86400;
            default: throw 'invalid unit ' + this.unit;
        }
    }

    static autoUnit(time: number): UnitTime {
        if (!time) {
            return UnitTime.Hours;
        }

        let unit = UnitTime.Seconds;
        if (time % 60 == 0) {
            unit = UnitTime.Minutes;
            time = time / 60;
        }
        if (time % 60 == 0) {
            unit = UnitTime.Hours;
            time = time / 60;
        }
        if (time % 24 == 0) {
            unit = UnitTime.Days;
            time = time / 24;
        }
        return unit;
    }

    static toSeconds(time: number, unit: UnitTime): number {
        switch (unit) {
            case UnitTime.Seconds: return time;
            case UnitTime.Minutes: return time * 60;
            case UnitTime.Hours: return time * 3600;
            case UnitTime.Days: return time * 86400;
            default: throw 'invalid unit ' + unit;
        }
    }

    static toUnit(time: number, unit: UnitTime): number {
        switch (unit) {
            case UnitTime.Seconds: return time;
            case UnitTime.Minutes: return Math.ceil(time / 60);
            case UnitTime.Hours: return Math.ceil(time / 3600);
            case UnitTime.Days: return Math.ceil(time / 86400);
            default: throw 'invalid unit ' + unit;
        }
    }

    static convert(time: number, from: UnitTime, to: UnitTime): number {
        var seconds = this.toSeconds(time, from);
        return this.toUnit(seconds, to);
    }
}
