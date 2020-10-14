<template>
  <div class="margin-top-image" style="padding-top: 12em !important">
    <div class="container">
      <div class="about d-flex flex-column">
        <div class="h2-tag align-self-center">אודות</div>
        <div class="main-text align-self-center long-copy text-center">
          <p>
            היי אנחנו המערכת האיכותית שהוקמה במטרה לסייע לך לחסוך בעלויות ביטוח
            הדירה. אנו יודעים שאתה מאוד עסוק, מרגיש שאתה עייף מלהתקשר לכל חברות
            הביטוח אז תן לנו לעזור לך בזה, אנחנו ממש טובים בזה ונוכיח לך
          </p>
        </div>
        <br />
      </div>
      <div class="pros wrap d-flex justify-content-center mt-5">
        <div class="d-flex flex-column p-4">
          <div class="align-self-center">
            <h3 style="color: #1569ac">הכל במקום אחד</h3>
          </div>
          <div class="description text-center mt-3">
            <p>
              אפשר לשכוח מליצור טבלאות ידניות שכל נתון חדש הורס המערכת תציג לך
              הצעות בהתאם לקריטריון נבחר מכל החברות
            </p>
          </div>
        </div>
        <div class="d-flex flex-column p-4">
          <div class="align-self-center">
            <h3 style="color: #1569ac">מהיר</h3>
          </div>
          <div class="description text-center mt-3">
            <p>
              לא עוד בזבוז זמן עצום על המתנה בטלפון בעוד כשתי דקות לאחר מילוי
              שאלון קצר תוצג לך ההצעה האטרקטיבית ביותר עבורך
            </p>
          </div>
        </div>
        <div class="d-flex flex-column p-4">
          <div class="align-self-center">
            <h3 style="color: #1569ac">זמין 24/7</h3>
          </div>
          <div class="description text-center mt-3">
            <p>
              נגמרו הימים ששעות הפעילות של החברה מכתיבים לנו את הלו"ז מהיום ניתן
              לעשות בדיקה ביום ובשעה שנח לך!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.h2-tag {
  font-size: 50px;
  word-spacing: 2px;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 1px;
  font-weight: 300;
  text-transform: uppercase;
}

.h2-tag:after {
  display: block;
  height: 2px;
  background-color: #1569ac;
  content: " ";
  width: 100px;
  margin: 0 auto;
  margin-top: 15px;
}

.description {
  max-width: 260px;
  font-size: 18px;
}

.long-copy {
  max-width: 600px;
  font-size: 25px;
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
  .container {
    .about {
      p {
        font-size: 18px !important;
      }
    }
  }
}

@media (max-width: 540px) {
  .container {
    .about {
      margin-top: -70px;
      p {
        font-size: 15px;
      }
      .main-text {
        margin-bottom: -50px;
      }
    }
  }
  .margin-top-image {
    margin-top: -100px !important;
  }
}
</style>
