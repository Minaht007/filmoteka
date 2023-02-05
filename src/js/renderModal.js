import { FILMS_DATA } from './render-main-page';
import { getDataFromLocalStorage } from './local-storage-info';

const cardList = document.querySelector('.cards__list');

console.log(cardList);

cardList.addEventListener('click', onRenderModal);

export default function onRenderModal(e) {
  console.log(e.target);
}

/* <div class="film-commercial">
  <h2 class="modal-main-title">A FISTFUL OF LEAD</h2>
  <table class="shot-inform-film">
    <tbody class="level-intarest">
      <tr class="tr">
        <td class="level-intarest__name">Vote / Votes</td>
        <td class="midl-table"></td>
        <td class="level-intarest__value">
          <span class="reting-level">7.3</span> / 1260
        </td>
      </tr>

      <tr class="tr">
        <td class="level-intarest__name">Popularity</td>
        <td class="midl-table"></td>
        <td class="level-intarest__value">100.2</td>
      </tr>
      <tr class="tr">
        <td class="level-intarest__name">Original Title</td>
        <td class="midl-table"></td>
        <td class="level-intarest__value">A FISTFUL OF LEAD</td>
      </tr>
      <tr class="tr">
        <td class="level-intarest__name">Genre</td>
        <td class="midl-table"></td>
        <td class="level-intarest__value">Western</td>
      </tr>
    </tbody>
  </table>
  <p class="comment-title">About</p>
  <p class="about-film">
    Four of the West’s most infamous outlaws assemble to steal a huge stash of
    gold from the most corrupt settlement of the gold rush towns. But not all
    goes to plan one is killed and the other three escapes with bags of gold
    hide out in the abandoned gold mine where they happen across another gang of
    three – who themselves were planning to hit the very same bank! As tensions
    rise, things go from bad to worse as they realise the bags of gold are
    filled with lead... they’ve been double crossed – but by who and how?
  </p>
  <ul class="modal-Btm">
    <li>
      <button class="addWatchmBtm" type="submit">
        add to Watched
      </button>
    </li>
    <li>
      <button class="addQueueBtm" type="submit">
        add to queue
      </button>
    </li>
  </ul>
</div>; */
