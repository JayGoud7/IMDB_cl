import Image from "next/image";
import Link from "next/link";

const loading = () => {
  return (
    <div className="load">
      <Image
        src={"/tringle-v2.svg"}
        width={90}
        height={90}
        placeholder="blur"
        blurDataURL={"/tringle-v2.svg"}
        alt="spinner"
        priority={true}
      />
    </div>
  );
};

export default loading;
