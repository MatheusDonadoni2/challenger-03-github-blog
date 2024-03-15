import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
export function HomeHeader() {
  return (
    <div className="rounded-[10px] h-[13.25rem] bg-c-base-profile py-[2rem] px-[2.5rem] drop-shadow-lg flex gap-2">
      <img
        src="https://fastly.picsum.photos/id/794/200/200.jpg?hmac=qNLJvkiBmg4TyCSCwU__daf9sb5La0_1eRzJewRgIyU"
        className="w-[9.5rem] h-[9.5rem] rounded-[8px]"
      />
      <div className="flex flex-col  justify-between">
        <header className="flex justify-between flex-col gap-[0.5rem] ">
          <section className="flex justify-between">
            <h1 className="text-c-base-title font-bold text-[1.5rem] leading-snug">
              Matheus Donadoni
            </h1>
            <a href="#">
              <span className="flex items-center font-bold text-c-blue gap-[0.5rem] hover:border-c-blue hover:border-b-2 leading-relaxed">
                GITHUB
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </a>
          </section>
          <p className="text-base text-c-base-text leading-relaxed">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </header>

        <footer className="gap-[1.5rem] flex">
          <a href="#">
            <span className="gap-[0.5rem] flex items-center">
              <FontAwesomeIcon icon={faGithub} className="text-c-base-label" />
              <span className="text-c-base-subtitle">matheusDonadoni2</span>
            </span>
          </a>

          <a href="#">
            <span className="gap-[0.5rem] flex items-center">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-c-base-label"
              />
              <span className="text-c-base-subtitle">Donsdoni</span>
            </span>
          </a>

          <a href="#">
            <span className="gap-[0.5rem] flex items-center">
              <FontAwesomeIcon
                icon={faUserGroup}
                className="text-c-base-label"
              />
              <span className="text-c-base-subtitle">0 Seguidores</span>
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
}
