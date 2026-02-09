import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import ScrollToTop from "../../components/scrollToTop";
import Head from "next/head";
import { Box, Image, Text } from "@chakra-ui/react";
import ArticleLayout from "../../components/blog/article";
import ThreeBackground from "../../components/ThreeBackground";

export default function Blog() {
  const content = (
    <>
      <Box>
        <span
          style={{
            fontWeight: "lighter",
            color: "orange",
            fontFamily: "italic",
            fontVariant: "small-caps",
          }}
        >
          Where do I even start?
        </span>
        <br />
        Looking back, the past 2 and a half years has been such a fun adventure,
        full of different people, experiences, challenges, and many great times.
        I was blessed to grow alongside many great people, having a great
        mentor, best friend, and some one who will slap me with the reality when
        I really needed it. Even with this arduous journey of many ups and
        downs, I didn&apos;t want to part ways on bad terms. So I hope I managed
        to give a proper farewell to my team. Now, the appropriate way to start
        this story is the by going back to the end of a beginning from all the
        way back to 2023.
        <br />
        <br />
        <span style={{ fontWeight: "bold", color: "orange" }}>2023</span>{" "}
        <Image
          src="https://i.imgur.com/Xd1x90P.png"
          alt="First Day of Work"
          py={4}
        />
        I landed in the payments team of Moneylion where I was greeted with the
        most warm bunch of people. From day one, I had alot to learn, starting
        from zero about Java springboot I needed to quickly pick up the pace. My
        mentor was always there to guide me through the complexities of the
        payment systems, and my teammates were always ready to lend a helping
        hand. The first few months were a whirlwind of learning, adapting, and
        growing. But that didn&apos;t limit the closeness the team had with each
        other. From my first trip to Ipoh with the team, it was the start of
        many more memorable moments together.
        <br />
        <Image src="https://i.imgur.com/kqdwWB6.png" alt="Ipoh Trip" py={4} />
        <br />
        <span style={{ fontWeight: "bold", color: "orange" }}>2024</span> <br />
        <Image
          src="https://i.imgur.com/GhaSnhg.jpeg"
          alt="Convocation"
          py={4}
        />
        I was so eternally grateful that my team took the time to come out all
        the way to my campus at Bukit Jalil to celebrate my convocation with me.
        It was very heartwarming that Angela took the whole morning to not only
        help me do my makeup and hair for an hour, but she went the extra mile
        to visit the florist and made her own boquet arrangement for me! I will
        never forget the kindness and effort she put in just for me.
        <Image src="https://i.imgur.com/7sPqiJU.png" alt="Team Outing" py={4} />
        Over time i found myself more comfortable with the team, being able to
        navigate myself in and out of the workplace. Being able to ask questions
        when it matters, picking up things quickly, and even being able to
        contribute with my limited experience being a fresh grad.
        <Image
          src="https://i.imgur.com/pXy4E58.jpeg"
          alt="Team Picture"
          py={4}
        />
        At this point, I remember feeling a sense of belonging, being part of a
        team that supported each other. With my position being more grounded, I
        felt more responsible to be able to speak on behalf of the team. Small
        things like resolving other team&apos;s issues or queries became part of
        my daily routine. I was no longer just a fresh grad, but a contributing
        member of the payments team.
        <Image
          src="https://i.imgur.com/Nq2WDX4.png"
          alt="Birthday 2024"
          py={4}
        />
        My first birthday celebration with my team was something I will closely
        remember as it was when Angela let me know she was leaving Moneylion
        soon. It was a bittersweet moment as I was happy for her new journey but
        sad to see her go. Her presence was irreplaceable, and I knew my big
        sister in office would be gone.
        <Image
          src="https://i.imgur.com/KyTZNLm.png"
          alt="Project Bengal"
          py={4}
        />
        2024 ended with my first overnight shift at office which was a very
        interesting experience to say the least. Instantly fell sick the day
        after but it was a memorable experience. And at this point i think
        i&apos;ve switched my seating place twice already? Since the addition of
        new members, I was like okay doesn&apos;t really matter where I sit
        because I&apos;m not really at my seat anyways.
        <br />
        <br />
        <span style={{ fontWeight: "bold", color: "orange" }}>2025</span> <br />
        <Image
          src="https://i.imgur.com/83svhS4.jpeg"
          alt="Promotion 2025"
          py={4}
        />
        2025 was a year of growth and recognition for me. I was promoted
        alongside my buddy Timothy that mentored me closely while I was still a
        fresh grad. I remember asking him alot of dumbshit questions but he was
        always patient enough to guide me through. Getting promoted was a huge
        milestone for me, and honestly I really owe majority of it to my lead,
        Sachin. From the coffee days of him explaning to me even the simplest
        things of Dockerfile syntax, he made sure I understood everything. I
        felt more confident in my abilities and was eager to take on new
        challenges.
        <br />
        <br />
        However, I did notice that as the team grew, the dynamics started to
        change. With more members, it became harder to maintain the same level
        of closeness we once had. Communication became more formal, and the
        sense of camaraderie started to fade. But I understood that this was a
        natural progression as teams evolve. Being left out will become more
        normal, where other members having their own cliques and circles formed.
        I tried my best to stay connected, but it was evident that the
        tight-knit bond we once had was slowly dissipating.
        <Image
          src="https://i.imgur.com/YuHzRlf.png"
          alt="Business As Usual"
          py={4}
        />
        Not much happened throughout 2025 that was memorable, just business as
        usual with the occasional team outing or celebration. I tried to make
        the best out of it, cherishing the moments I had with my team knowing
        that probably my time here will also come to an end soon.
        <Image
          src="https://i.imgur.com/JmpIuOw.png"
          alt="Birthday 2025"
          py={4}
        />
        My birthday in this year was such a huge celebration as it coincided
        with someone else in office. With the many friends I made in office, it
        was such a memorable day filled with laughter, joy, and of course, cake!
        This is a huge shoutout to Jacky for organizing this whole event and
        making me feel so special on my day.
        <Image
          src="https://i.imgur.com/DadwTaW.png"
          alt="Volleyball 2025"
          py={4}
        />
        As I sign off from being the co-host of Volleyball, I tried to get a
        turnout without much success. Not really many people knew it was
        properly gonna be my last time hosting it.
        <Image
          src="https://i.imgur.com/Wdxtvcb.png"
          alt="Christmas 2025"
          py={4}
        />
        I started growing bitter at this point as I felt more and more isolated
        from the team. The once close-knit group had now become a distant team
        where I felt like an outsider. The Christmas celebration was a stark
        reminder of how much things had changed. Many instances of under the
        table secrecies, singled out exclusions, to many excuses of not being
        able to explain their own decisions, but none could come and say they
        just didn&apos;t want me there. I couldn&apos;t help but feel a sense of
        loss for the camaraderie we once shared.
        <br />
        <br />
        But as all things said, these people are just a passing moment in my
        life. People come and go, and it&apos;s up to me to cherish the good
        memories. I bear no resentment towards anyone, for they have all played
        a part in my journey, shaping me into the person I am today. Lost
        investments in time and effort, but all in all its a learning
        experience.
        <br />
        <br />
        <span
          style={{
            fontWeight: "bold",
            color: "orange",
            fontFamily: "italic",
            fontVariant: "small-caps",
          }}
        >
          Goodbye Payments Team!
        </span>{" "}
        <Image
          src="https://i.imgur.com/gTCslTN.jpeg"
          alt="Farewell 2026"
          py={6}
        />
      </Box>
    </>
  );

  return (
    <>
      <Head>
        <title>Khor Zhen Win | First Job</title>
        <meta
          name="description"
          content="My First Job Experience From A Fresh Graduate"
          key="desc"
        />
        <meta property="og:title" content="Khor Zhen Win | First Job" />
        <meta property="og:description" content="Blogging? no im flogging" />
        <meta property="og:image" content="https://i.imgur.com/gTCslTN.jpeg" />
        <link
          rel="shortcut icon"
          href="https://cdn-icons-png.flaticon.com/512/2666/2666436.png"
        />
      </Head>
      <ThreeBackground />
      <Box position="relative" zIndex={1}>
        <Header />
        <ArticleLayout
          title={"My First Job"}
          date={"February 2026"}
          content={content}
        />
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  );
}
