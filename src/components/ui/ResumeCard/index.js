import * as C from './styles';

const ResumeCard = ({ title, value, icon: Icon, color }) => {
  return (
    <C.Container $color={color}>
      <C.Header $color={color}>
        <C.Title>{title}</C.Title>
        {Icon && <Icon />}
      </C.Header>
      <C.Value $color={color}>{value}</C.Value>
    </C.Container>
  );
};

export default ResumeCard;
