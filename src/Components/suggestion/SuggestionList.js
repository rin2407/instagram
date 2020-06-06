import React from "react";
import SuggestionItem from './SuggestionItem'
export default function SuggestionList() {

  return (
    <div>
        <SuggestionItem name="instagram" des="Instagram Official Account" image="https://scx2.b-cdn.net/gfx/news/hires/2019/instagram.jpg"/>
        <SuggestionItem name="Monkey D.Luffy" des="Instagram recommended" image="https://cf.shopee.vn/file/629dd170377725b0ed5af666a19beb7c"/>
        <SuggestionItem name="Uzumaki Naruto" des="Instagram recommended" image="https://i.pinimg.com/originals/30/2c/33/302c333163e8c539742fe55ae85d9096.jpg"/>
    </div>
  );
}
