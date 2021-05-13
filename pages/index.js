
import HomeSpotlight from "../component/layout/HomeSpotlight/HomeSpotlight";
import SiteHeader from "../component/layout/SiteHeader/SiteHeader";
import SectioBlogs from "../component/layout/SectionBlogs/SectionBlogs";
import SiteFooter from "../component/layout/SiteFooter/SiteFooter";
import SectionVideos from "../component/layout/SectionVideos/SectionVideos";
import SectionEvents from "../component/layout/SectionEvents/SectionEvents";
import SectionSwag from "../component/layout/SectionSwag/SectionSwag";
import SectionLeaderboard from "../component/layout/SectionLeaderboard/SectionLeaderboard";

import "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="wrap">
      <SiteHeader />
      <HomeSpotlight />
      <SectioBlogs />
      <SectionVideos />
      <SectionLeaderboard />
      <SectionEvents />
      <SectionSwag />
      <SiteFooter />
    </div>
  );
}