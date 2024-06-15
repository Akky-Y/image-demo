import Hover from "@/components/hover";
import Image from "next/image";
import img from "../../public/test.avif";

export default function Home() {
  return (
    <div className="flex flex-col container space-y-4">
      <div>
        <Hover
          title="Props: quality"
          description="The quality of the optimized image, an integer between 1 and 100,
            where 100 is the best quality and therefore largest file size.
            Defaults to 75."
        />
        <Image
          src="https://avatars.githubusercontent.com/u/74072948?v=4"
          alt=""
          width={200}
          height={200}
          quality={100}
        />
      </div>
      <div>
        <Hover
          title="Props: fill"
          description='A boolean that causes the image to fill the parent element, which is
          useful when the width and height are unknown.
          The parent element must assign position: "relative", position:
          "fixed", or position: "absolute" style. By default, the img element
          will automatically be assigned the position: "absolute" style. If no
          styles are applied to the image, the image will stretch to fit the
          container. You may prefer to set object-fit: "contain" for an image
          which is letterboxed to fit th1e container and preserve aspect ratio.
          Alternatively, object-fit: "cover" will cause the image to fill the
          entire container and be cropped to preserve aspect ratio. For this to
          look correct, the overflow: "hidden" style should be assigned to the
          parent element.'
        />
        <div className="relative aspect-video bg-pink-400 -z-10">
          <Image
            fill
            className="object-contain"
            src="https://avatars.githubusercontent.com/u/74072948?v=4"
            alt=""
            quality={100}
          />
        </div>
      </div>
      <div>
        <Hover
          title="Static Import"
          description="When blur, the blurDataURL property will be used as the placeholder. If src is an object from a static import and the imported image is .jpg, .png, .webp, or .avif, then blurDataURL will be automatically populated, except when the image is detected to be animated.
        For dynamic images, you must provide the blurDataURL property. Solutions such as Plaiceholder can help with base64 generation."
        />
        <Image src={img} alt="" placeholder="blur" width={1000} height={1000} />
      </div>
    </div>
  );
}
