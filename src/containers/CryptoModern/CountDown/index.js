import twitch from "common/assets/image/saasClassic/Twitch-Icon.png";
import youtube from "common/assets/image/saasClassic/youtube-icon.svg";
import { RulesBackground } from "common/components/RulesBackground";
import Link from "next/link";
import SectionWrapper from "./countdown.style";
const deadline = new Date("2022/09/05 14:00:00 ");

const CountDownSection = () => {
  return (
    <RulesBackground className={`bg-event`}>
      <SectionWrapper
        id="channel_section"
        className="flex flex-col text-center items-center !p-12 gap-10"
      >
        {/* <Heading content="COUNTDOWN To Event " />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade> */}
        <h2 className="text-[20px] lg:text-3xl text-primary font-bold">LIVESTREAM CHANNELS</h2>
        <div className="flex gap-11 flex-wrap justify-center">
          <Link href="https://www.youtube.com/c/TritonPoker/" legacyBehavior>
            <a target="_blank" className="!h-fit">
              <button class="btn btn-youtube h-16 aspect-[189.5/64]">
                <img src={youtube.src} className="h-full" alt="youtube" />
              </button>
            </a>
          </Link>
          <Link href="https://twitch.tv/tritonpoker" legacyBehavior>
            <a target="_blank">
              <button class="btn btn-twitch h-16 aspect-[189.5/64]">
                <img src={twitch.src} className="h-full" alt="twitch" />
              </button>
            </a>
          </Link>
        </div>
      </SectionWrapper>
    </RulesBackground>
  );
};

export default CountDownSection;
