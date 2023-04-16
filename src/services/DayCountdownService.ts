export function DayCountdownService(targetDate: Date): number {

    return (
        Math.floor((targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) + 1)
    )
};

