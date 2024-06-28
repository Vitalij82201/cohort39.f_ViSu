import "./styles.css";

function Card() {
  return (
    <div class="info-form">
      <div class="field">
        <p>Аватар:</p>
        <p class="text-data"></p>
      </div>
      <div class="field">
        <p>Имя и Фамилия:</p>
        <p class="text-data">Гомер Симпсон</p>
      </div>
      <div class="field">
        <p>Род деятельности:</p>
        <p class="text-data">Мульт Герой</p>
      </div>
      <div class="field">
        <p>Хоби:</p>
        <p class="text-data">Мультфильмы</p>
      </div>
    </div>
  );
}

export default Card;
