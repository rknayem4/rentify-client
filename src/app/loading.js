import { ProgressCircle } from "@heroui/react";

function Indeterminate() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ProgressCircle isIndeterminate aria-label="Loading">
        <ProgressCircle.Track>
          <ProgressCircle.TrackCircle />
          <ProgressCircle.FillCircle />
        </ProgressCircle.Track>
      </ProgressCircle>
    </div>
  );
}

export default Indeterminate;
