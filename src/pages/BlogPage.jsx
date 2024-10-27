import styled from "styled-components";

export const BlogPage = () => {
  return (
    <StyledContaner>
      <StyledTitle>Product Description</StyledTitle>
      <StyledBorder></StyledBorder>

      <StyledText>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
        lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
        cursus eu, suscipit id nulla.
      </StyledText>
      <StyledText>
        Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
        sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce
        ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
        sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et
        placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
        mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam
        gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic
        cylinder planters come with a wooden stand to help elevate your plants
        off the ground.
      </StyledText>

      <StyledText>
        <b>Living Room:</b>
        <p>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </StyledText>
      <StyledText>
        <b>Dining Room:</b>
        <p>
          The benefits of houseplants are endless. In addition to cleaning the
          air of harmful toxins, they can help to improve your mood, reduce
          stress and provide you with better sleep. Fill every room of your home
          with houseplants and their restorative qualities will improve your
          life.
        </p>
      </StyledText>
      <StyledText>
        <b>Office:</b>
        <p>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </StyledText>
    </StyledContaner>
  );
};

const StyledContaner = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-size: 17px;
  font-weight: 700;
  color: #46a358;

  margin-top: 70px;
`;
const StyledBorder = styled.div`
  margin-top: 12;
  border-bottom: 0.3px solid #46a35880;
`;
const StyledText = styled("div")`
  font-size: 14px;
  font-weight: 400;
  color: #727272;
  & > b {
    font-weight: 700;
    color: #3d3d3d;
  }
`;
