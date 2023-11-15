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
            ]
        };
    }
}
</script>

<template>
    <main class="container main">

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
        </div>
    </main>
</template>

<style lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables.scss" as *;

.main {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .title {
        width: 600px;
        margin-top: 200px;
        text-align: center;
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
    margin-top: 20px;
    gap: 20px;
    margin-right: 420px;

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

}
</style>
