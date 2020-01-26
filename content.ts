export default {
  topbar: {
    messengerHref: 'https://m.me/krallcinemas',
    phoneNumber: '754-210-0757'
  },
  header: {
    links: [
      {
        title: 'About',
        href: '#about'
      },
      {
        title: 'Services',
        href: '#services'
      },
      {
        title: 'Portfolio',
        href: '#portfolio'
      },
      {
        title: 'Pricing',
        href: '#pricing'
      }
    ]
  },
  hero: {
    videoSrc: '',
    mainText: 'Cinematic Wedding Videography',
    subText: 'Capturing Priceless Moments & Memories For Life'
  },
  about: {
    mainText: 'About me',
    subText: 'Storyteller at heart',
    meAsset: '/me.jpg',
    description:
      'Hi I am Megan! I am 25 years old and started filming in 2019. Ever since I picked up a camera, I knew this was meant for me. I put my whole heart and soul into creating these films. I love it so much because I help couples hold on to these very special memories forever.'
  },
  services: {
    mainText: 'My Services',
    subText: 'Each include full-day coverage and video delivery online.',
    group: [
      {
        icon: 'fas fa-gem',
        title: 'Proposal Videos',
        description: `I'll hide in a bush just for you, to capture the "YES" moment that you'll want to share with your family and friends.`
      },
      {
        icon: 'fas fa-calendar-day',
        title: 'Wedding Day Videos',
        description: `At the end of every wedding I think, “Wow, that went by so fast,” and the couple feels the same way! After the big day is over all that’s left is the memories of a perfect day that flew by. But, investing in a wedding videographer allows you to relive your special day forever.`
      },
      {
        icon: 'fas fa-kiss-wink-heart',
        title: 'Love Story Videos',
        description: `Want your love story to live on forever? Let's create something magical to pass down to family members born after you.`
      }
    ]
  },
  portfolio: {
    mainText: 'My Portfolio',
    works: [
      {
        type: 'WEDDING DAY',
        description: `Yadeli & Austin got married on December 27th 2019 at The Venue 1902 in Sanford, Florida.`,
        youtubeUrl: 'https://www.youtube.com/embed/hs6zNz6uBns',
        testimonialAsset: '',
        testimonial: `This beautiful human is so incredibly amazing, she made my day so beautiful and captured so many precious moments. I seriously cannot thank her enough for all she did for me on such a special day. She’s a ninja and so fabulous and I am so excited for her! Thank you Megan for being the best!`,
        testimonialBy: 'YADELI'
      },
      {
        type: 'WEDDING DAY',
        description: `Jenna and Kyle got married on October 19, 2019 at The Robbins Lodge in Davie, Florida.`,
        youtubeUrl: 'https://www.youtube.com/embed/mDPt-71W1dA'
        // testimonialAsset: '',
        // testimonial: `This beautiful human is so incredibly amazing, she made my day so beautiful and captured so many precious moments. I seriously cannot thank her enough for all she did for me on such a special day. She’s a ninja and so fabulous and I am so excited for her! Thank you Megan for being the best!`,
        // testimonialBy: 'YADELI & AUSTIN'
      }
    ]
  }
}
