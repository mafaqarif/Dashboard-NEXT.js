import Image from "next/image";
import Link from "next/link";

interface LinkProps {
  title: string;
  imageUrl: string;
  link: string;
}
const SidebarLink: React.FC<LinkProps> = ({ title, imageUrl, link }) => {
  return (
    <Link href={link}>
      <div className="sidebar-link">
        <Image src={imageUrl} alt={imageUrl} width={25} height={25} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default SidebarLink;
