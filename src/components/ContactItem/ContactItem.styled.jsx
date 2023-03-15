import styled from '@emotion/styled';

export const ContactListButton = styled.button`
  font-size: 24px;
  color: white;
  margin-left: auto;
  border-radius: 23%;
  border: inherit;
  background: linear-gradient(160deg, #ed8bf8, #6d0462);
  padding: 10px;
  cursor: pointer;
  transition: 250ms transform ease-in-out, 250ms box-shadow ease-out,
    250ms color ease-in;
  :hover {
    transform: scale(1.05);
    font-size: 28px;
    color: #f8f856;
    box-shadow: 1px 3px 2px blanchedalmond, -1px -3px 5px #ed8bf8;
  }
`;

export const ContactNumber = styled.span`
  font-weight: 600;
`;