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
                    price:"59.00",
                    description: "Introduction to Javascript for Beginners",
                    lessons: 14,
                    students: 76
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

        <section class="courses container">
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

    }
}
</style>
