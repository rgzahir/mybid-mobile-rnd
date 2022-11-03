import { useNavigation } from "@react-navigation/native";

const checkNav = useNavigation();

export const LoginHandler = () => {
  checkNav.navigate("DashboardScreenStack");
};
