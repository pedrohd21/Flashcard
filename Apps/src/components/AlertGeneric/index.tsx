// import React, { useState } from 'react';
// import { View, StyleSheet, Button, Alert } from 'react-native';
// import { AlertButton, AlertButtonContainer, Container, Icon, Text } from './style';
// import theme from '../../theme';

// type Props = {
//   title: string;
//   message: string;
//   options : string;
// }

// export function CustomAlert({ title, message, options, ...rest }: Props) {

//   const [isVisible, setIsVisible] = useState(false); // para fdicar visial quando for necessario

//   const handleClose = () => {
//     setIsVisible(false);
//   };
//   return (
//     <Container>
//       <AlertButtonContainer >
//         <AlertButton {...rest} onPress={onCancel} style={{ borderColor: theme.COLORS.RED, borderWidth: 1, }}>
//           <Icon
//             name="times-circle"
//             color={theme.COLORS.RED}
//             size={17}
//           />
//           <Text style={{ color: theme.COLORS.RED }}>Cancelar</Text>
//         </AlertButton>
//         <AlertButton  {...rest} onPress={isso eu vou fazer na tela da propria acao} style={{ borderColor: theme.COLORS.BLUE, borderWidth: 1, }}>
//           <Icon
//             name='nome personalizado'
//             color={theme.COLORS.BLUE}
//             size={17}
//           />
//           <Text style={{ color: theme.COLORS.BLUE }}>Salvar</Text>
//         </AlertButton>
//       </AlertButtonContainer>
//     </Container>
//   )
// }

// quando eu importar na tela que eu precisar
// const { title, message, options } = {
//   title: 'Confirmação',
//   message: 'Deseja excluir este item?',
//   options: ['Excluir', 'Cancelar'],
// };