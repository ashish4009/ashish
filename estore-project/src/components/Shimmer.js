const Shimmer = () => {
  return (
    <>
      {Array(14)
        .fill("")
        .map((e, index) => (
          <div className="card">
            <div key={index}>
              <div className="shimmer-container"></div>
              <div className="p-12">
                <div className="shimmer-header"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
                <div className="shimmer-line"></div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

const SearchShimmer = () => {
  return (
    <>
      {/* <div className="card">
        <div key={index}>
          <div className="shimmer-container"></div>
          <div className="p-12">
            <div className="shimmer-header"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
          </div>
        </div>
      </div> */}

      <div className="p-2 m-2" data-testid="search-bar">
        <form>
          <div className="">
            <div className="">
              <input
                className="shimmer-line"
                // placeholder="Search for restaurants and food"
                // onChange={(e) => {
                //   setSearchInput(e?.target?.value);
                // }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export { Shimmer, SearchShimmer };
