import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ initialTargetDate }) => {
  const [targetDate, setTargetDate] = useState(() => {
    // Retrieve target date from localStorage if it exists
    const savedDate = localStorage.getItem('targetDate');
    return savedDate ? new Date(savedDate) : new Date(initialTargetDate);
  });

  useEffect(() => {
    // Store the target date in localStorage
    localStorage.setItem('targetDate', targetDate);
  }, [targetDate]);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div aria-label={`Countdown ${timeLeft.days} days left`} className="mx-auto grid grid-cols-2 justify-center gap-6 md:max-w-max md:grid-cols-4">
      <div aria-hidden="true" className="shrink-0">
        <div className="bg-gray-1000 flex h-[1.1em] shrink-0 rounded-[0.05em] text-[max(120/1500*100vw,80px)]/[1.24] lg:text-[min(calc(160/1500*100vw),150px)]/[1.24]">
          <div className="w-[1.5em] text-left tabular-nums countdown_digitWrapper__q2YyI">
            <div className="text-background-200 absolute font-medium">{String(timeLeft.days).padStart(2, '0')}</div>
          </div>
        </div>
        <p className="mt-2 text-center text-[16px]/[24px] font-medium text-gray-900 md:mt-4 lg:mt-8 lg:text-[24px]/[24px]">Days</p>
      </div>
      <div aria-hidden="true" className="shrink-0">
        <div className="bg-gray-1000 flex h-[1.1em] shrink-0 rounded-[0.05em] text-[max(120/1500*100vw,80px)]/[1.24] lg:text-[min(calc(160/1500*100vw),150px)]/[1.24]">
          <div className="w-[1.5em] text-left tabular-nums countdown_digitWrapper__q2YyI">
            <div className="text-background-200 absolute font-medium">{String(timeLeft.hours).padStart(2, '0')}</div>
          </div>
        </div>
        <p className="mt-2 text-center text-[16px]/[24px] font-medium text-gray-900 md:mt-4 lg:mt-8 lg:text-[24px]/[24px]">Hours</p>
      </div>
      <div aria-hidden="true" className="shrink-0">
        <div className="bg-gray-1000 flex h-[1.1em] shrink-0 rounded-[0.05em] text-[max(120/1500*100vw,80px)]/[1.24] lg:text-[min(calc(160/1500*100vw),150px)]/[1.24]">
          <div className="w-[1.5em] text-left tabular-nums countdown_digitWrapper__q2YyI">
            <div className="text-background-200 absolute font-medium">{String(timeLeft.minutes).padStart(2, '0')}</div>
          </div>
        </div>
        <p className="mt-2 text-center text-[16px]/[24px] font-medium text-gray-900 md:mt-4 lg:mt-8 lg:text-[24px]/[24px]">Minutes</p>
      </div>
      <div aria-hidden="true" className="shrink-0">
        <div className="bg-gray-1000 flex h-[1.1em] shrink-0 rounded-[0.05em] text-[max(120/1500*100vw,80px)]/[1.24] lg:text-[min(calc(160/1500*100vw),150px)]/[1.24]">
          <div className="w-[1.5em] text-left tabular-nums countdown_digitWrapper__q2YyI">
            <div className="text-background-200 absolute font-medium">{String(timeLeft.seconds).padStart(2, '0')}</div>
          </div>
        </div>
        <p className="mt-2 text-center text-[16px]/[24px] font-medium text-gray-900 md:mt-4 lg:mt-8 lg:text-[24px]/[24px]">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
