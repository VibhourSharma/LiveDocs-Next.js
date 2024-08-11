import Image from "next/image";

const Loader = () => {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        alt="loader"
        className="animate-spin"
        width={32}
        height={32}
      />
      Loading...
    </div>
  );
};

export default Loader;
