const ProgressBar = ({ step, totalSteps }) => {
    const progress = (step / totalSteps) * 100;
  
    return (
      <div className="rounded-xl" style={{ height: '10px', width: '100%', backgroundColor: '#f0cfb2e5', }}>
        <div
        className="rounded-xl"
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: 'green',
          }}
        />
      </div>
    );
  };

  export default ProgressBar;
  