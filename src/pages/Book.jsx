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
          className=" rounded-2xl shadow-md"
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
            subjects from leadership and living life well, to raising Godly kids and
            building stronger relationships.
             The narrative delivers grounded
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
                There is something for everyone in IMPERFECT HAPPINESS particularly young
                people, new Christians and those who don&#39;t know God. The
                author&#39;s mistake filled journey provides biblical
                application often through his failures as he attempts to
                integrate The Bible into daily life. IMPERFECT HAPPINESS
                incorporates the author&#39;s Traumatic Brain Injury, Battle
                with Cancer and his Dad&#39;s unique path of building a Godly
                Legacy to help anyone better handle the many issues life throws
                at us. The pillars for his journey of Imperfect Happiness are
                Scripture, the Life of Jesus, Prayer and Christian Music.
                The
                Thirty Day Devotional challenge of living life for God&#39;s
                purpose is designed to help readers pause, reflect and think
                about what matters most in their life.
                 The phrase &quot;Imperfect
                Happiness&quot; represents life&#39;s challenges as we learn to
                take the worry out of living by gaining greater Godly Wisdom and
                God Confidence, while giving God more control. One of the most
                important messages of IMPERFECT HAPPINESS is that living life
                well with God is a skill which can be developed, simply.
                 IMPERFECT HAPPINESS is unique not only from
                the underlying themes and practical biblical prompts, it can be
                read multiple ways. The style connects the reader to relatable
                life experiences in a clear and informative way. Choices for the
                reader include:  thirty Bible Studies and a Glossary of Terms,
                ,  by life journey
                subjects, and the supporting Bible verses, in 18 translations, 
                thirty-one authentic and bold prayers responding to today&#39;s
                daily challenges,  through ninety eight Christian songs
                highlighting scripture and the life of Jesus.
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
