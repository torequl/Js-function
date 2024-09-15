// const x = "torequ";

// console.log(!isNaN(x))

function waitingTime(interviewTimes, serialNumber) {
    // ইনপুট ভ্যালিডেশন
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }

    // ইন্টারভিউ সময়ের গড় বের করা
    const averageInterviewTime = Math.round(interviewTimes.reduce((sum, time) => sum + time, 0) / interviewTimes.length);

    // ইসরাতের আগে কতজন আছে তা বের করা
    const peopleBeforeIsrat = serialNumber - interviewTimes.length - 1;

    // ইসরাতের অপেক্ষার সময়
    const waitingTimeForIsrat = peopleBeforeIsrat * averageInterviewTime;

    return waitingTimeForIsrat;
}

console.log (waitingTime([ 3, 5, 7, 11, 6 ], 10))