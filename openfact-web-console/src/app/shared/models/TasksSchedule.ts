export class TasksSchedule {
    id: String;
    attempNumber: number;
    lapseTime: number;
    onErrorAttempNumber: number;
    onErrorLapseTime: number;
    delayTime: number;
    submitTime: Date;
    submitDays: Array<String>;
}
