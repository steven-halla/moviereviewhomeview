import React, {FC} from 'react';

import styled from "styled-components";

const StyleHeaderDiv = styled.div`
  .tom-rotten-review {
    background-color: grey;
    
    img {
      width: 100%;
      height: auto;
    }
  }
  
  .other-reviews {
    background-color: yellow;
  }
`

export const HomeReview: FC = (props) => {

return (
  <StyleHeaderDiv>
    <p>Movie reviews in 150 characters or less</p>
    <p>This is what a tom rotten review looks like:</p>
    <div className="tom-rotten-review">
      <img src="http://robf.com.au/wp-content/uploads/2011/12/Aliens-A2S3-Briefing.png" alt=""/>
      <p>Written by: Tom Hanks</p>
      <p>"One review takes up about 150 characters. This means your reviews will be short. At about 3 sentences and no more."</p>
    </div>
    This is what a review on most other sites looks like:
    <div className="other-reviews">
      <p>Written By: Hank Toms</p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad consectetur doloribus eligendi ipsam, maiores minima nam nesciunt nisi nulla pariatur quaerat rerum sed soluta sunt temporibus unde vel velit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque explicabo incidunt perferendis provident quisquam. Blanditiis delectus harum id illo illum, nostrum nulla odio officia pariatur quae qui quos rem reprehenderit?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque aut dolores error esse eum, ex excepturi impedit in ipsam maiores neque nisi nostrum odit perspiciatis quaerat quasi voluptas voluptatum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut commodi cumque cupiditate, esse exercitationem illum labore libero, molestiae necessitatibus odit omnis quam quasi quidem quos sequi sint sunt velit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem, beatae blanditiis ex explicabo, impedit, laborum laudantium maiores nesciunt perferendis quis quo repellat repudiandae saepe soluta totam ullam? Temporibus, voluptatum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aspernatur cupiditate, doloremque dolores ea eum, exercitationem hic magnam nostrum perferendis sed vero voluptas. Harum hic molestiae molestias nobis nostrum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet doloremque exercitationem fugit harum inventore laboriosam nam non nulla, officiis pariatur possimus quasi ratione sed, sint, unde velit vitae?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolorem ex id incidunt inventore ipsum mollitia possimus praesentium, quos ratione sequi sit tempora, veniam vitae voluptatem? Assumenda itaque minima quidem.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, doloremque dolores ducimus est eveniet explicabo molestias mollitia quas quibusdam rem rerum saepe, tenetur unde? Consequuntur natus officia placeat sapiente sint?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque autem beatae commodi deserunt doloribus exercitationem iusto libero natus nemo, nihil optio perspiciatis quaerat quasi rerum temporibus unde velit voluptate!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto consequatur cumque eveniet impedit, inventore iure magnam, maiores minus nostrum omnis quibusdam quidem quo ratione reprehenderit saepe sed, sequi totam!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, asperiores commodi dolor dolorum eaque esse eveniet hic magnam magni maxime nemo officiis possimus saepe tempora tempore tenetur veniam veritatis vitae?
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque exercitationem fugiat minima nam obcaecati omnis porro similique. Alias doloribus eaque incidunt non quisquam! Aliquid dignissimos possimus repellat repellendus suscipit ullam.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid asperiores cupiditate, debitis deserunt doloremque ea eos exercitationem impedit minima perspiciatis possimus reprehenderit sunt! Deleniti dolor ipsam quis quod velit!

    </div>



  </StyleHeaderDiv>
)
}
