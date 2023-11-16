<script >
export default {
    data() {
        return {
            cardsData: [
                { numbers: '1.926', description: 'FINISHED SESSION' },
                { numbers: '3.092+', description: 'ENROLLED LEARNERS' },
                { numbers: '200', description: 'ONLINE INSTRUCTORS' },
                { numbers: '100%', description: 'SATISFACTION RATE' },
            ],

            cardSections: [
                [
                    { title: 'Graphic Design', description: 'Have a passion for graphics and arts? show your talents with confidence and self assertiveness', image: '/home-6-service-image-01.png' },
                    { title: 'Idea Discussion ', description: 'Get teamed up with the specialists who work and teach coding for yoear at famous universities', image: '/home-6-service-image-02.png' }
                ],
                [
                    { title: 'Business Administration', description: 'Learners are encouraged to study mechanism and structure of systems administration', image: '/home-6-service-image-03.png' },
                    { title: 'Web Development', description: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed', image: '/home-6-service-image-04.png' }
                ]
            ],

            serviceList: [
                'Select & customize courses to your preferences',
                'Change the tutor and make arrangements',
                'Participate in events to join others',
                'Get the desired certificate delivered at house'
            ],

            iconList: [['fas', 'check']],

            courses: [
                {
                    image: "/course-02-480x298.jpg",
                    price: "$40.00",
                    description: "Learning to Write as a Professional Author",
                    lessons: 20,
                    students: 50
                },

                {
                    image: "/stock-full-hd-03-480x298.jpg",
                    price: 'Free',
                    description: 'Customer-centric',
                    lessons: 24,
                    students: 769
                },
                {
                    image: "/stock-full-hd-04-480x298.jpg",
                    price: '19.00',
                    description: 'Open Programming Courses for Everyone: Python',
                    lessons: 17,
                    students: 62
                },
                {
                    image: "/stock-full-hd-06-480x298.jpg",
                    price: "26.00",
                    description: "Accademic Listening and Note taking",
                    lessons: 14,
                    students: 67
                },
                {
                    image: "/course-featured-image-01-480x298.jpg",
                    price: "39.00",
                    description: "Master jQuery in a Short Period of Time",
                    lessons: 6,
                    students: 51
                },
                {
                    image: "/stock-full-hd-05-480x298.jpg",
                    price: "59.00",
                    description: "Introduction to Javascript for Beginners",
                    lessons: 14,
                    students: 76
                }
            ],

            companies: ['/client-logo-colored-01.png', '/client-logo-colored-02.png', '/client-logo-colored-03.png', '/client-logo-colored-04.png', '/client-logo-colored-05.png', '/client-logo-colored-06.png'],

            artists: [
                {
                    id: 1,
                    name: 'Artist ',
                    image: '/artist-blog-03-480x325.jpeg',
                    description: 'Brush Strokes Energize Trees in Paintings',
                    date: 'May 15, 2020',
                    views: 688
                },
                {
                    id: 2,
                    name: 'Artist',
                    image: '/artist-blog-01-480x325.jpg',
                    description: 'Pocket-Sized Notebooks Hold Miniature Paintings',
                    date: 'May 15, 2020',
                    views: 603
                },
                {
                    id: 3,
                    name: 'Artist',
                    image: '/artist-blog-02-480x325.jpg',
                    description: 'Connection Between Self-Portraits and Identity',
                    date: 'May 15, 2020',
                    views: 300
                },
            ],
            learning: [
                {
                    icon: ['far', 'flag',],
                    title: 'Idea Discussion',
                    description: 'Get teamed up with the specialists who work and teach coding for years at famous universities'
                },
                {
                    icon: ['fas', 'gear'],
                    title: 'Web Development',
                    description: 'Learn to start building a webpage from scratch. You decide your own pace, cours and speed'
                },
                {
                    icon: ['far', 'life-ring'],
                    title: 'Sustem Administration',
                    description: 'Learners are ancouraged to sudy the mechanism and structure of system administartion'
                },
                {
                    icon: ['fas', 'tv'],
                    title: 'Graphic Design',
                    description: 'Have a passion for graphics and arts? Show your talent with confidence and self-assertiveness'
                }
            ]
        };
    }
}
</script>

<template>
    <main class="container main">
        <section class="services-section">
            <h1 class="title">Let Passion and determination be the guide along the way and develop at your own pace that's
                comfortable</h1>
            <p class="name">FANNIE MORENO</p>
            <p class="company">/Founder & CEO</p>
            <div class="row-main">
                <div class="col-4" v-for="(card, index) in cardsData" :key="index">
                    <div class="card">
                        <p class="numbers">{{ card.numbers }}</p>
                        <p class="description">{{ card.description }}</p>
                    </div>
                </div>
            </div>
            <div class="card-sections">
                <div class="first-cards">
                    <div class="card-container" v-for="(card, cardIndex) in cardSections[0]" :key="cardIndex">
                        <div class="card">
                            <img :src="card.image" :alt="`Image ${cardIndex}`">
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.description }}</p>

                        </div>
                    </div>
                </div>
                <div class="second-cards" style="margin-top: 40px;">
                    <div class="card-container" v-for="(card, cardIndex) in cardSections[1]" :key="cardIndex">
                        <div class="card">
                            <img :src="card.image" :alt="`Image ${cardIndex}`">
                            <h3>{{ card.title }}</h3>
                            <p>{{ card.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="get-started">
                    <p>TOGETHER WE CAN CREATE</p>
                    <h1>Service We <span>Can Provide</span> For My Clients.</h1>
                    <ul class="services">
                        <li v-for="(item, index) in serviceList" :key="index">
                            <font-awesome-icon class="check" icon="fas fa-check" />
                            {{ item }}
                        </li>
                    </ul>
                    <button class="btn btn-main"> Get started for free</button>
                </div>
            </div>
        </section>

        <section class="courses">
            <div class="title-section">
                <p>CHOOSE A COURSE TO GET STARTED</p>
                <h1 class="latest-course-title">Latest Featured <span>Courses</span></h1>
            </div>
            <div class="course-cards">
                <div class="row">
                    <div class="card" v-for="(course, index) in courses" :key="index">
                        <!-- Round profile picture -->
                        <div class="profile-picture">
                            <img :src="course.image" :alt="`Course ${index + 1}`">
                        </div>
                        <!-- Price and Description -->
                        <div class="price-description">
                            <div class="price">{{ course.price }}</div>
                            <p class="description">{{ course.description }}</p>
                            <div class="additional-info">
                                <p class="info">{{ course.lessons }} lessons</p>
                                <p class="info">{{ course.students }} students</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="btn btn-courses">View all courses <font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
        </section>
        <section class="about-maxcoach">
            <h1 class="title-about">Why people talk about MaxCoach?</h1>
            <div class="card-quote">
                <div class="img">
                    <img class="freelancer-img" src="/testimonial-avata-02.jpg" alt="">
                </div>
                <div class="desc">
                    <p class="quote">I am free to learn at my own pace, follow my own schedule and choos the subject I like.
                        Great study portal for people like me.</p>
                    <p class="name-freelancer">MINA HOLLAGE</p>
                    <p class="freelancer">/Freelancer</p>
                </div>
            </div>
            <section class="companies">
                <div class="company-logo" v-for="(company, index) in companies" :key="index">
                    <img :src="company" :alt="'Company ' + (index + 1)">
                </div>
            </section>
        </section>

        <section class="blog">
            <p>ENJOY READING ON MAXCOACH</p>
            <h1 class="title-blog">Latest on <span>Our Blogs</span></h1>
            <div class="row">
                <div class="card-blog" v-for="artist in artists" :key="artist.id">
                    <img class="img-blog" :src="artist.image" :alt="artist.name">
                    <p>{{ artist.name }}</p>
                    <div class="description">{{ artist.description }}</div>
                    <div class="additional-info">
                        <p class="info">{{ artist.date }}</p>
                        <p class="info">{{ artist.views }} views</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <p>wanna</p>
            <h1>Glad to Help you</h1>
            <div class="learning">
                <div class="card-lerning" v-for="learn in learning">
                    <font-awesome-icon class="flag" :icon="learn.icon" />
                    <div class="title-learn">{{ learn.title }}</div>
                    <p class="description-learn">{{ learn.description }}</p>
                </div>
            </div>
            <figure class="big-img">
                <img  src="/home-6-services-image.png" alt="">
            </figure>
        </section>
        <section class="start">
            <p>Start today fro getting <span>Online Certification</span></p>
            <h1>You can be your own guiding star with our help!</h1>
            <button class="btn">Get started now</button>
        </section>
    </main>
</template>

<style lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables.scss" as *;

.main {
    display: flex;
    flex-direction: column;

    .services-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .title {
        width: 500px;
        margin-top: 200px;
        text-align: center;
        display: flex;
    }

    .name {
        font-weight: bold;
        display: flex;
        justify-content: center;
    }

    .company {
        color: #696969;
        display: flex;
        justify-content: center;
    }

    .row-main {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-top: 100px;

        .card {
            width: 200px;
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            justify-content: center;


            .numbers {
                font-size: 35px;
                color: #20AD96;
                font-weight: bold;
            }

            .description {
                font-size: 13px;
                font-weight: bold;
            }
        }
    }


    .card-sections {
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
        gap: 20px;


        .first-cards,
        .second-cards {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .card-container {
            border: 1px solid black;
            width: 210px;
            display: flex;
            flex-direction: column;
            height: 300px;
        }
    }

    .get-started {
        margin: 100px 0 0 50px;
        width: 400px;

        .services {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 25px;

            .check {
                margin-right: 10px;
                color: #20AD96;
            }
        }

        .btn-main {
            margin-top: 40px;
        }
    }

    .courses {
        width: 100%;
        border: 1px solid black;
        margin-top: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #F5F7FA;

        .card {
            display: flex;
            width: 470px;
            gap: 10px;
            margin-left: 20px;
            margin-bottom: 20px;
        }

        .price-descript {
            display: flex;
            flex-direction: column;
        }

        .title-section {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 50px;
        }

        .course-cards {
            display: flex;
            border: 1px solid black;
            margin-bottom: 20px;

            .profile-picture img {
                width: 130px;
                height: 130px;
                border-radius: 50%;
                display: block;
                margin: 0 auto 10px;
            }

            .price {
                font-size: 24px;
                font-weight: bold;
                color: #333;
                margin-bottom: 8px;
            }

            .description {
                font-size: 18px;
                color: #555;
                margin-bottom: 15px;
            }

            .additional-info {
                display: flex;
            }

            .info {
                font-size: 14px;
                color: #777;
            }
        }

        .btn-courses {
            display: flex;
            gap: 10px;
            align-items: center;
        }
    }
}

.about-maxcoach {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
}

.card-quote {
    display: flex;
    gap: 50px;
    margin-top: 40px;


    .freelancer-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: block;
        margin: 0 auto 10px;
    }

    .desc {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .quote {
        font-size: 20px;
        margin-top: 10px;
        width: 300px;
    }
}

.companies {
    display: flex;
    gap: 50px;
    margin-top: 60px;
    align-items: center;
}


.blog {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-blog {
        margin-bottom: 40px;
    }
}

.card-blog {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 320px;
}



.img-blog {
    width: 300px;
    margin-right: 30px;

}


.learning {
    margin-top: 100px;
    display: flex;
    gap: 10px;
}

.flag {
    font-size: 30px;
}

.title-learn {
    margin-top: 20px;
    margin-bottom: 20px;
}

.big-img{
    margin-top: 60px;
}

.start{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
</style>
