import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutTheBook = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <section className="max-w-2xl mx-auto p-10">
      <div className="grid md:grid-cols-1 gap-6 items-center">
        {/* Book Image */}
        <img
          src="/images/book.jpg"
          alt="Book Cover"
          className="w-full rounded-2xl shadow-md"
        />
        <h2 className="text-blue-600 font-bold mb-4 hover:underline">
          From Publisher:{" "}
          <Link to="https://christianfaithpublishing.com/" target="_blank">
            Christian Faith Publishing
          </Link>
        </h2>
        {/* Book Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About the Book</h2>

          <p className="text-gray-700">
            IMPERFECT HAPPINESS is a thought provoking and encouraging story
            highlighting God&#39;s many resources to live our best life. Written
            during the author&#39;s 2+ year cancer battle, the book is an
            adventure and love story about understanding on wide range of
            subjects from fatherhood and leadership, to raising Godly kids and
            building stronger relationships. The narrative delivers grounded
            biblical principles, with application, from proven business
            techniques such as The Caring Continuum (Philippians 2:4 CEB);
            leadership strategies including In Front, Not Above (Mathew 20:26
            NLT); life lessons such as Brilliant on the Basics (Psalm 19:7 ESV)
            and 21 Steps to Being the Best Imperfect You (2 Timothy 2:15 GW).
            The author concludes with a challenge to come together, as God&#39;s
            family, to return our communities and nation to our kids at the
            levels of kindness, love and greatness our parents left for us by
            living the Bible, not just reading it.
            {!isExpanded && (
              <span
                className="inline text-blue-500 cursor-pointer ml-3"
                onClick={handleToggle}
              >
                Read More
              </span>
            )}
          </p>

          {isExpanded && (
            <div className="mt-4 text-gray-700 animate-fadeIn">
              <p>
                Based on real events, the book follows the author&#39;s journey
                of dreaming of business success as a teenager from a poor
                community to securing The American Dream, the pinnacle of
                leadership achievement at The Organization; followed by the
                emptiness of the accomplishment. He experiences the benefits and
                power of Executive Level success including a country club
                lifestyle of exotic cars, lavish trips, private jets and access
                to powerful American leaders in multiple industries coined The
                CLUB. Over time the author discovers that The Organization is
                evil; the surrounding community immoral, the combination having
                a detrimental impact on his young family. Simultaneously, during
                weekly meetings with a group of Godly Men he comes to realize
                that God brought him to Florida, not to be a successful leader,
                but to dedicate his life to Christ on October 19, 1995. Ready to
                follow, but overwhelmed by what to do, the author&#39;s decades
                long journey of Imperfect Happiness details life&#39;s dead
                ends, contrasted by the inspirational message of happiness and
                contentment of living life well with God. God used the PERFECT
                TWIST of a Traumatic Brian Injury and Cancer (Romans 15:13 NLT)
                to help the author live Imperfect Happiness well (Proverbs 3:13
                ESV); to recognize Godly Hope (Romans 15:13 NLT); experience God
                Strength (Psalm 18:2 KJV); build God Confidence (1 John 5:14
                CEB) and give God control as reader&#39;s seek Godly Wisdom
                (Proverbs 2:6 NLT). The author&#39;s willingness to be
                vulnerable, combined with the presentation of relatable life
                events positions delivers an inviting story to Build Stronger
                Relationships (1 Corinthians 3:9 MSG); be More Intentional
                (Proverbs 21:5 ESV) in living life well; become Godly Doers
                (James 1:22 ESV); while helping anyone build their own lasting
                Godly Legacy (Psalm 112:6 ESV).
              </p>
              <p>
                There is something for everyone in the book particularly young
                people, new Christians and those who don&#39;t know God. The
                author&#39;s mistake filled journey provides biblical
                application often through his failures as he attempts to
                integrate The Bible into daily life. IMPERFECT HAPPINESS
                incorporates the author&#39;s Traumatic Brain Injury, Battle
                with Cancer and his Dad&#39;s unique path of building a Godly
                Legacy to help anyone better handle the many issues life throws
                at us. The pillars for his journey of Imperfect Happiness are
                Scripture, the Life of Jesus, Prayer and Christian Music. The
                Thirty Day Devotional challenge living life for God&#39;s
                purpose is designed to help readers pause, reflect and think
                about what matters most in their life. IMPERFECT HAPPINESS is a
                story of hope and kindness introducing relatable examples of
                God&#39;s many resources (Ephesian 6:13 MSG) to pursue real
                freedom and strengthen lives. The phrase &quot;Imperfect
                Happiness&quot; represents life&#39;s challenges as we learn to
                take the worry out of living by gaining greater Godly Wisdom and
                God Confidence, while giving God more control. One of the most
                important messages of IMPERFECT HAPPINESS is that living life
                well with God is a skill which can be developed, simply. The key
                messages of Salvation; Prayer; Building a Relationship with
                Jesus; Learning to Trust God, Giving Him Control; Communicating
                with The Holy Spirit and Pursuing Godly Wisdom are all woven
                into this motivational story. The book delivers a story element
                or life challenge supported by Prayer, Bible Verses, Traits of
                Jesus and Christian Music highlighting unwelcome behavior of
                today&#39;s broken world including:  leaders of American
                Institutions attempting to eliminate American and Christian
                values;  anti-parent efforts to indoctrinate our children and
                divide our families,  dysfunction in the health care, corporate
                and university communities,  biblical discernment in a
                post-truth world. IMPERFECT HAPPINESS is unique not only from
                the underlying themes and practical biblical prompts, it can be
                read multiple ways. The style connects the reader to relatable
                life experiences in a clear and informative way. Choices for the
                reader include:  thirty Bible Studies and a Glossary of Terms
                to clarify the meaning of God&#39;s Word,  by life journey
                subjects, and the supporting Bible verses, in 18 translations, 
                thirty-one authentic and bold prayers responding to today&#39;s
                daily challenges,  through ninety eight Christian songs
                highlighting scripture and the life of Jesus.
              </p>
              <p>
                Terry is nationally recognized for small business performance
                optimization as a featured speaker, workshop leader and author.
                He has published over 100 articles on a wide range of business
                and leadership topics, and is the author of the first Small
                Business Handbook for the U.S. Government, the Small Business
                Mobilization Planner. As a volunteer, Terry worked for over 25
                years with over 1,500 young people in five states. Through his
                cancer experience, Terry came to recognize the need for strength
                and resolve in his life&#39;s final chapter, and to continue a
                lifelong &quot;making a difference&quot; objective with a
                message now directed at Young People, Those Who Don&#39;t Know
                God and New Christians to make a greater impact in the name of
                Jesus.
              </p>

              <button
                onClick={handleToggle}
                className="mt-3 text-blue-500 hover:underline"
              >
                Read Less
              </button>
            </div>
          )}
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default AboutTheBook;
