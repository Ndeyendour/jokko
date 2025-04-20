import React from 'react';

const teamMembers = [
  {
    name: 'N. Dione',
    role: 'Fondatrice',
    image: 'assets/img/member2.png',
  },
  {
    name: 'K. Sarr',
    role: 'Head Designer',
    image: 'assets/img/member1.png',
  },
  {
    name: '0. Diouf',
    role: 'Marketeur',
    image: 'assets/img/member2.png',
  },
  {
    name: 'N. Ndour',
    role: 'Developpeuse',
    image: 'assets/img/member2.png',
  },
 
];

const TeamSection = () => {
  return (
    <section className="at-team-wrap" id="team">
      <div className="height-b150 height-lg-b100"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="at-section-heading at-style1">
              <h2>Notre Equipe</h2>
              <div className="height-b40 height-lg-b30"></div>
              <p>
              Derrière JokkoDesign , une équipe passionnée qui unit design, technologie et innovation pour offrir des interfaces centrées utilisateur et adaptées au marché africain. Ensemble, nous concevons des expériences numériques qui font la différence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="height-b100 height-lg-b60"></div>
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="at-team-member text-center">
                <div className="at-team-member-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="height-b40 height-lg-b30"></div>
                <div className="at-member-meta">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
