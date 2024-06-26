// Third party dependencies.
import { StyleSheet } from 'react-native';

// External dependencies.
import { Theme } from '../../../../util/theme/models';

/**
 * Style sheet function for AccountConnectMultiSelector screen.
 * @returns StyleSheet object.
 */
const styleSheet = (params: { theme: Theme }) => {
  const { colors } = params.theme;

  return StyleSheet.create({
    container: {
      height: '100%',
    },
    body: {
      paddingHorizontal: 16,
    },
    description: {
      textAlign: 'center',
      marginVertical: 16,
      color: colors.text.alternative,
    },
    ctaButtonsContainer: {
      marginTop: 24,
      flexDirection: 'row',
      marginBottom: 16,
    },
    button: { flex: 1 },
    buttonSeparator: {
      width: 16,
    },
    selectAllButton: {
      marginBottom: 16,
    },
    sdkInfoContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      paddingHorizontal: 16,
      marginBottom: -16,
    },
    sdkInfoDivier: {
      borderTopWidth: 1,
      borderTopColor: colors.border.muted,
      height: 1,
      width: '100%',
    },
    disabled: {
      opacity: 0.5,
    },
    addAccountButtonContainer: {
      marginHorizontal: 16,
      marginTop: 16,
    },
  });
};

export default styleSheet;
