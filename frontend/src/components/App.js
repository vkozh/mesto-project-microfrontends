import { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteCardPopup from "./DeleteCardPopup";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import auth from "../utils/auth";
import { useHistory } from "react-router-dom";
import { Route } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import {
  ERRORS_LOGIN,
  ERRORS_REG,
  ERRORS_CHECK,
  ERROR,
} from "../utils/constants";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isStatusOk, setIsStatusOk] = useState(false);
  const history = useHistory();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [buttonText, setButtonText] = useState();
  const [deleteCard, setDeleteCard] = useState({});
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleCardTrashClick = (card) => {
    setDeleteCard(card);
    setIsDeleteCardPopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard(null);
    setErrorMessage("");
  };
  const handleCardClick = (card) => setSelectedCard(card);

  const handleUpdateUser = (name, about) => {
    api
      .editProfile(name, about, renderLoading)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  };

  const handleUpadteAvatar = (avatar) => {
    api
      .changeAvatar(avatar, renderLoading)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) =>
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      )
      .catch((err) => console.log(`Ошибка ${err}`));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((c) => c !== card));
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    api
      .addCard(name, link, renderLoading)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  };

  const handleRegister = (password, email) => {
    setErrorMessage(null);
    return auth
      .register(password, email)
      .then(() => {
        setIsStatusOk(true);
        history.push("/signin");
      })
      .catch((err) => {
        setErrorMessage(ERRORS_REG[err.code] || err.message);
        setIsStatusOk(false);
      })
      .finally(() => {
        setIsInfoTooltipOpen(true);
      });
  };

  const handleLogin = (password, email) => {
    return auth
      .login(password, email)
      .then((data) => {
        // localStorage.setItem("jwt", data.token);
        tokenCheck();
      })
      .catch((err) => {
        setErrorMessage(ERRORS_LOGIN[err.code] || err.message);
        setIsStatusOk(false);
        setIsInfoTooltipOpen(true);
      });
  };

  const handleLogout = () => {
    // localStorage.removeItem("jwt");
    setLoggedIn(false);
    return auth
      .logout()
      .catch((err) => console.log(ERRORS_CHECK[err.code] || err.message));
  };

  const renderLoading = (isLoading) => {
    isLoading ? setButtonText("Сохранение...") : setButtonText();
  };

  const tokenCheck = () => {
    // const jwt = localStorage.getItem("jwt");
    // if (jwt)
    auth
      .getUser() //jwt
      .then((data) => {
        if (data) {
          setEmail(data.email);
          setLoggedIn(true);
          history.push("/");
        }
        else setLoggedIn(false);
      })
      .catch((err) => console.log(ERRORS_CHECK[err.code] || err.message));
  };

  const setPageData = () => {
    api
      .getUser()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(`Ошибка ${err}`));

    api
      .getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (!loggedIn) {
      setCurrentUser({});
      setEmail("");
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="container">
        <Switch>
          <Route path="/signup">
            <Register register={handleRegister} loggedIn={loggedIn} />
          </Route>
          <Route path="/signin">
            <Login login={handleLogin} loggedIn={loggedIn} />
          </Route>
          <ProtectedRoute loggedIn={loggedIn} exact>
            <Header loggedIn={loggedIn} email={email} logout={handleLogout} />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardTrash={handleCardTrashClick}
              cards={cards}
              setPageData={setPageData}
            />
            <Footer />
          </ProtectedRoute>
        </Switch>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          buttonText={buttonText}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpadteAvatar}
          buttonText={buttonText}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          name="edit-add-card"
          title="Новое место"
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          buttonText={buttonText}
        />

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />

        <DeleteCardPopup
          onClose={closeAllPopups}
          deleteCard={handleCardDelete}
          isOpen={isDeleteCardPopupOpen}
          card={deleteCard}
          buttonText={buttonText}
        />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          isStatusOk={isStatusOk}
          onClose={closeAllPopups}
          errorMessage={errorMessage || ERROR}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
