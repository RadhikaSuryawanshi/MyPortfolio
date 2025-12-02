'use client'
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

export default function SplitScreen() {

  const search = useSearchParams();
  const preload = search.get("preload");

    const [show, setShow] = useState(preload !== "false");
    const [animateOut, setAnimateOut] = useState(false);

   const [datestring, setDatestring] = useState("");
const [timestring, setTimestring] = useState("");
  
    useEffect(() => {
        if (preload === "false") return;

        const enterTimeout = setTimeout(() => {
            setAnimateOut(true);
            const exitTimeout = setTimeout(() => {
                setShow(false);
            }, 1500);
            return () => clearTimeout(exitTimeout);
        }, 500);

        return () => clearTimeout(enterTimeout);
  }, [preload]);

 
useEffect(() => {
  const date = new Date();

  setDatestring(
    date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  );

  setTimestring(
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
}, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-9999 flex flex-col md:flex-row overflow-hidden animate-fade-in bg-transparent">
            <div
                className={clsx(
                    "flex-1 border-r border-muted bg-muted z-10 flex justify-center items-center transition-transform duration-500 ease-in-out",
                    {
                        "-translate-x-full": animateOut,
                        "translate-x-0": !animateOut,
                    }
                )}
            >
                <p className="font-bold text-4xl font-mono tracking-widest text-center">
                    {datestring}
                </p>
            </div>

            <div
                className={clsx(
                    "flex-1 border-l border-muted bg-muted z-10 flex justify-center items-center transition-transform duration-500 ease-in-out",
                    {
                        "translate-x-full": animateOut,
                        "translate-x-0": !animateOut,
                    }
                )}
            >
                <p className="font-bold text-3xl font-mono tracking-widest">
                    {timestring}
                </p>
            </div>
        </div>
    );
}