import React, { useState } from "react";
import "../styles/PlaneBooking.css";
import point from "../Assets/tripmaBooking/point heavy.png";
import check from "../Assets/tripmaBooking/check heavy.png";
import wordmark from "../Assets/tripmaBooking/Wordmark.png";
import arrowRight from "../Assets/tripmaBooking/arrowRight.png";
import ecoSeats from "../Assets/tripmaBooking/Economy Seats.png";
import bussinesSeats from "../Assets/tripmaBooking/Business Seats.png";
import { useSelector } from "react-redux";
import { fillForm } from "../store/flights";
import { AppDispatch, RootState } from "../store";
import plane from "../Assets/plane.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const PlaneBooking = () => {
  const [selectedSeat, setCurrentSeat] = useState<number>(0);
  const [seatNumber, setSeatNumbert] = useState<string>("");
  const currentFlight: any = useSelector(
    (state: RootState) => state.flights.currentFlight
  );
  const currentReservation: any = useSelector(
    (state: RootState) => state.flights.currentReservation
  );
  const dispatsh = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="tripma_container">
      <div className="tripma">
        <div className="the-plane">
          <div className="plane_svg">
            <img src={plane} alt="" />
            <div className="plane_seats">
              {currentFlight.Seats.map((oneSeat: any) => {
                return (
                  <button
                    disabled={!oneSeat.availble}
                    style={
                      oneSeat.availble
                        ? { background: "green" }
                        : { background: "red" }
                    }
                    className="seat"
                    onClick={() => {
                      setCurrentSeat(oneSeat.id);
                      setSeatNumbert(oneSeat.name);
                      dispatsh(
                        fillForm({
                          ...currentReservation,
                          seatNumber: seatNumber,
                        })
                      );
                    }}
                  >
                    {oneSeat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="seat-selector">
          <div className="border" />
          <div className="content">
            <div className="progress-step-header-default">
              <div className="flight-information">
                <div className="flight-info-information-da">
                  <div className="code">{currentFlight.destFrom}</div>
                  <div className="location"></div>
                </div>
                <img className="arrowright-icon" alt="" src={arrowRight} />
                <div className="flight-info-information-da">
                  <div className="code">{currentFlight.destTo}</div>
                  <div className="location"></div>
                </div>
                <img className="arrowright-icon1" alt="" src={wordmark} />
                <div className="flight-info-information-da2">
                  <div className="code">Code</div>
                  <div className="location">City, Country</div>
                </div>
              </div>
              <div className="progress-step">
                <div className="flight-info-divider-dark">
                  <div className="divider" />
                </div>
                <div className="flight-info">
                  <div className="flight-info-inactive">
                    <div className="time-data">
                      <span></span>
                      <span className="span">{` | `}</span>
                      <span>{currentFlight.departureTime}</span>
                    </div>
                    <div className="direction">Departing</div>
                  </div>
           
                </div>
                <div className="flight-info-divider-dark">
                  <div className="divider" />
                </div>
                <div className="flight-info1">
                  <div className="time-data">
                    <span></span>
                    <span className="span">{` | `}</span>
                    <span>{currentFlight.arrivalTime}</span>
                  </div>
                  <div className="direction">Arriving</div>
                </div>
              </div>
            </div>
            <div className="feature-lists">
              <div className="feature-list-economy">
                <img className="economy-seats-icon" alt="" src={ecoSeats} />
                <div className="feature-list">
                  <div className="header-and-badge">
                    <div className="header">Economy</div>
                    <div className="badge-selected">
                      <b className="label">Selected</b>
                    </div>
                  </div>
                  <div className="description">
                    Rest and recharge during your flight with extended leg room,
                    personalized service, and a multi-course meal service
                  </div>
                  <div className="divider-thick" />
                  <div className="feature-list-bullet">
                    <img className="point-heavy-icon" alt="" src={point} />
                    <div className="bullets-of-key">
                      Built-in entertainment system
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <img className="point-heavy-icon" alt="" src={point} />
                    <div className="bullets-of-key">
                      Complimentary snacks and drinks
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <img className="point-heavy-icon" alt="" src={point} />
                    <div className="bullets-of-key">
                      One free carry-on and personal item
                    </div>
                  </div>
                  <div className="feature-list-bullet3">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className="bullets-of-key">
                      Bullets of key value for user
                    </div>
                  </div>
                  <div className="feature-list-bullet3">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className="bullets-of-key">
                      Bullets of key value for user
                    </div>
                  </div>
                  <div className="feature-list-bullet3">
                    <img
                      className="point-heavy-icon"
                      alt=""
                      src="/rectangle-10.svg"
                    />
                    <div className="bullets-of-key">
                      Bullets of key value for user
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-list-economy">
                <img
                  className="economy-seats-icon"
                  alt=""
                  src={bussinesSeats}
                />
                <div className="feature-list">
                  <div className="header-and-badge1">
                    <div className="header">Business class</div>
                    <div className="badge-selected1">
                      <b className="label">Selected</b>
                    </div>
                  </div>
                  <div className="description">
                    Rest and recharge during your flight with extended leg room,
                    personalized service, and a multi-course meal service
                  </div>
                  <div className="divider-thick1" />
                  <div className="feature-list-bullet">
                    <img className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">Extended leg room</div>
                  </div>
                  <div className="feature-list-bullet">
                    <img className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">
                      First two checked bags free
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <img className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">Priority boarding</div>
                  </div>
                  <div className="feature-list-bullet">
                    <img className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">Personalized service</div>
                  </div>
                  <div className="feature-list-bullet">
                    <img className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">
                      Enhanced food and drink service
                    </div>
                  </div>
                  <div className="feature-list-bullet">
                    <img className="point-heavy-icon" alt="" src={check} />
                    <div className="bullets-of-key">
                      Seats that recline 40% more than economy
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navigation-footer">
              <div className="seat-selection-divider">
                <div className="divider2" />
              </div>
              <div className="content1">
                <div className="user-selections">
                  <div className="passenger-data">
                    <div className="label2">Passenger 1</div>
                    <div className="name">Sofia Knowles</div>
                  </div>
                  <div className="passenger-data1">
                    <div className="label3">Seat number</div>
                    <div className="name">{seatNumber}</div>
                  </div>
                </div>
                <div className="button-row">
                  <div className="button">
                    <div
                      className="label3"
                      onClick={() => {
                        navigate("/PassengerInfo");
                      }}
                    >
                      Save and close
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaneBooking;
