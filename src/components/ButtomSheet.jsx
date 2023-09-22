import { useEffect, useState } from "react";

export default function ButtomSheet() {
  const [isDragging, setIsDragging] = useState(false);
  const [customSheetHeight, setCustomSheetHeight] = useState(10);
  const [startDragPosition, setStartDragPosition] = useState(0);

  const getContactPosition = (event) =>
    event.touches ? event.touches[0] : event;

  const handleDragStart = (e) => {
    setIsDragging(true);
    const { pageY } = getContactPosition(e);
    setStartDragPosition(pageY);
  };

  const handleDragMove = (event) => {
    if (!startDragPosition) return;
    const { pageY } = getContactPosition(event);
    const deltaY = startDragPosition - pageY;
    setStartDragPosition(pageY);
    const deltaHeight = (deltaY / window.innerHeight) * 100;
    setCustomSheetHeight((prevHeight) => prevHeight + deltaHeight);
  };

  const handleDragEnd = () => {
    setStartDragPosition(0);
    setIsDragging(false);
    setCustomSheetHeight((prevHeight) => {
      if (prevHeight < 25) {
        return 10;
      } else if (prevHeight > 75) {
        return 90;
      } else {
        return 50;
      }
    });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        handleDragMove(event);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startDragPosition]);

  return (
    <main className={`flex min-h-screen flex-col items-center p-10 bg-gray-200`}>
      <div
        style={{ height: `${customSheetHeight}vh` }}
        className={`fixed bottom-0 left-0 right-0 flex flex-col bg-black rounded-t-2xl max-w-5xl w-full mx-auto p-2 transition-all ease-in-out duration-300`}>
        <div
          onMouseDown={handleDragStart}
          className={`w-full flex items-center justify-center p-2 cursor-pointer ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}>
          <div className={`w-8 h-2 bg-white rounded-full`}></div>
        </div>
        <div
          className={`flex items-center justify-center text-lg sm:text-2xl font-mono py-4 my-1 h-full  text-white rounded-md bg-white`}>
          <div className="flex flex-wrap">
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
            <img src=""/>
          </div>
        </div>
      </div>
    </main>
  );
}
