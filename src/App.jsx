import { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaCalendarAlt,
  FaChevronRight,
  FaFutbol,
  FaInstagram,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaStar,
  FaTrophy,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import "./App.css";

const career = [
  {
    year: "2002",
    club: "SPORTING CP",
    country: "PORTUGAL",
    text: "เริ่มต้นเส้นทางฟุตบอลอาชีพระดับชุดใหญ่กับ Sporting CP และแสดงให้เห็นถึงพรสวรรค์ตั้งแต่อายุยังน้อย",
  },
  {
    year: "2003",
    club: "MANCHESTER UNITED",
    country: "ENGLAND",
    text: "ย้ายสู่พรีเมียร์ลีกและพัฒนาตัวเองจากดาวรุ่งสู่หนึ่งในนักฟุตบอลที่ดีที่สุดของโลก",
  },
  {
    year: "2009",
    club: "REAL MADRID",
    country: "SPAIN",
    text: "ช่วงเวลาที่ยิ่งใหญ่ที่สุดช่วงหนึ่งของอาชีพ คว้าแชมป์และสร้างสถิติการทำประตูมากมาย",
  },
  {
    year: "2018",
    club: "JUVENTUS",
    country: "ITALY",
    text: "ย้ายสู่กัลโช่ เซเรีย อา และช่วย Juventus คว้าแชมป์ลีกอิตาลี",
  },
  {
    year: "2021",
    club: "MANCHESTER UNITED",
    country: "ENGLAND",
    text: "กลับสู่ Old Trafford และสร้างช่วงเวลาที่น่าจดจำให้กับแฟนบอลทั่วโลก",
  },
  {
    year: "2023",
    club: "AL-NASSR",
    country: "SAUDI ARABIA",
    text: "เริ่มบทใหม่ใน Saudi Pro League และกลายเป็นหนึ่งในนักเตะที่โดดเด่นที่สุดของลีก",
  },
];

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345678") {
      localStorage.setItem("ronaldoLogin", "true");
      onLogin();
    } else {
      setError("Username หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <main className="login-screen">
      <div className="login-bg-number">7</div>

      <div className="login-decoration left"></div>
      <div className="login-decoration right"></div>

      <section className="login-box">
        <div className="login-top">
          <div className="cr7-mark">
            <span>CR</span>
            <strong>7</strong>
          </div>

          <div>
            <span className="mini-label">THE LEGEND</span>
            <h1>CRISTIANO<br />RONALDO</h1>
          </div>
        </div>

        <div className="login-line"></div>

        <div className="login-heading">
          <span>PRIVATE ACCESS</span>
          <h2>Welcome Back.</h2>
          <p>เข้าสู่เว็บไซต์ประวัติของ Cristiano Ronaldo</p>
        </div>

        <form onSubmit={handleLogin}>
          <label>
            USERNAME
            <div className="input-wrap">
              <FaUser />
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </label>

          <label>
            PASSWORD
            <div className="input-wrap">
              <span className="lock-icon">●</span>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>

          {error && <div className="login-error">{error}</div>}

          <button className="login-submit" type="submit">
            ENTER PROFILE
            <FaArrowRight />
          </button>
        </form>

        <div className="login-bottom">
          <span>CR7 / BIOGRAPHY</span>
          <span>EST. 1985</span>
        </div>
      </section>
    </main>
  );
}

function Stat({ number, label, suffix = "" }) {
  return (
    <div className="stat">
      <div className="stat-number">
        {number}
        <span>{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function Home({ onLogout }) {
  return (
    <div className="website">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="nav-logo">
          <span>CR</span>
          <strong>7</strong>
        </a>

        <div className="nav-menu">
          <a href="#about">ABOUT</a>
          <a href="#career">CAREER</a>
          <a href="#legacy">LEGACY</a>
          <a href="#stats">STATS</a>
        </div>

        <button className="logout" onClick={onLogout}>
          <FaSignOutAlt />
          LOGOUT
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-bg-text">RONALDO</div>

        <div className="hero-grid"></div>

        <div className="hero-copy">
          <div className="eyebrow">
            <span></span>
            THE FOOTBALL ICON
          </div>

          <h1>
            CRISTIANO
            <br />
            <em>RONALDO</em>
          </h1>

          <p>
            The story of a legend who turned talent,
            discipline and ambition into one of football's
            greatest careers.
          </p>

          <a href="#about" className="hero-button">
            DISCOVER THE LEGACY
            <FaArrowRight />
          </a>
        </div>

        <div className="hero-player">
          <div className="hero-circle"></div>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
            alt="Cristiano Ronaldo"
          />

          <div className="hero-seven">7</div>
        </div>

        <div className="hero-side">
          <span>PORTUGAL</span>
          <div></div>
          <span>AL-NASSR</span>
        </div>

        <a href="#about" className="scroll-down">
          <span>SCROLL TO EXPLORE</span>
          <FaArrowDown />
        </a>
      </section>

      {/* INTRO */}
      <section id="about" className="intro section-dark">
        <div className="section-number">01</div>

        <div className="intro-image">
          <div className="image-frame">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
              alt="Cristiano Ronaldo"
            />
          </div>

          <div className="image-caption">
            <span>CR7</span>
            <span>PORTUGAL</span>
          </div>
        </div>

        <div className="intro-content">
          <div className="section-label">
            <span>01</span>
            THE MAN BEHIND THE NUMBER
          </div>

          <h2>
            Born to
            <br />
            <em>inspire.</em>
          </h2>

          <p className="large-text">
            Cristiano Ronaldo dos Santos Aveiro is more than
            a footballer. He is a symbol of ambition,
            discipline and relentless pursuit of greatness.
          </p>

          <p>
            เกิดวันที่ 5 กุมภาพันธ์ 1985 ที่เมือง Funchal
            ประเทศโปรตุเกส Ronaldo เริ่มต้นจากเด็กที่มี
            ความฝัน ก่อนจะก้าวขึ้นมาเป็นหนึ่งในนักฟุตบอล
            ที่ได้รับการยอมรับมากที่สุดในประวัติศาสตร์
          </p>

          <div className="personal-info">
            <div>
              <span>FULL NAME</span>
              <strong>Cristiano Ronaldo dos Santos Aveiro</strong>
            </div>

            <div>
              <span>BORN</span>
              <strong>05 FEBRUARY 1985</strong>
            </div>

            <div>
              <span>POSITION</span>
              <strong>FORWARD</strong>
            </div>

            <div>
              <span>HEIGHT</span>
              <strong>1.88 M</strong>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="stats-section">
        <div className="stats-header">
          <div>
            <div className="section-label">
              <span>02</span>
              THE NUMBERS
            </div>
            <h2>Numbers <em>don't lie.</em></h2>
          </div>

          <p>
            ตัวเลขบางส่วนที่สะท้อนความยิ่งใหญ่
            ของเส้นทางอาชีพของ Ronaldo
          </p>
        </div>

        <div className="stats-grid">
          <Stat number="5" label="BALLON D'OR" />
          <Stat number="5" label="CHAMPIONS LEAGUE" />
          <Stat number="7" label="JERSEY NUMBER" />
          <Stat number="28" label="SAUDI LEAGUE GOALS" />
        </div>

        <div className="stats-note">
          <span>2025 / 26</span>
          Saudi Pro League — Al-Nassr
        </div>
      </section>

      {/* CAREER */}
      <section id="career" className="career-section">
        <div className="section-label">
          <span>03</span>
          THE JOURNEY
        </div>

        <div className="career-heading">
          <h2>
            A career
            <br />
            <em>without limits.</em>
          </h2>

          <p>
            จาก Sporting CP สู่เวทีที่ยิ่งใหญ่ที่สุด
            ของโลก และบทใหม่กับ Al-Nassr
          </p>
        </div>

        <div className="timeline">
          {career.map((item, index) => (
            <div className="timeline-item" key={item.year}>
              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-dot">
                <span></span>
              </div>

              <div className="timeline-content">
                <span>{item.country}</span>
                <h3>{item.club}</h3>
                <p>{item.text}</p>
              </div>

              <div className="timeline-index">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEGACY */}
      <section id="legacy" className="legacy-section">
        <div className="legacy-bg">LEGACY</div>

        <div className="legacy-content">
          <div className="section-label">
            <span>04</span>
            THE LEGACY
          </div>

          <h2>
            More than
            <br />
            <em>a number.</em>
          </h2>

          <p>
            หมายเลข 7 กลายเป็นมากกว่าตัวเลขบนเสื้อ
            มันกลายเป็นสัญลักษณ์ของความพยายาม
            ความมั่นใจ และความทะเยอทะยาน
          </p>

          <div className="legacy-cards">
            <div className="legacy-card">
              <FaTrophy />
              <strong>5</strong>
              <span>BALLON D'OR</span>
            </div>

            <div className="legacy-card">
              <FaFutbol />
              <strong>7</strong>
              <span>ICONIC NUMBER</span>
            </div>

            <div className="legacy-card">
              <FaStar />
              <strong>∞</strong>
              <span>LEGACY</span>
            </div>
          </div>
        </div>

        <div className="legacy-player">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
            alt="Cristiano Ronaldo"
          />
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote-section">
        <div className="quote-mark">"</div>

        <div className="quote-inner">
          <span>THE MINDSET</span>

          <h2>
            “Your love makes me strong,
            <br />
            your hate makes me unstoppable.”
          </h2>

          <div className="quote-line"></div>

          <p>— CRISTIANO RONALDO</p>
        </div>
      </section>

      {/* CURRENT */}
      <section className="current-section">
        <div className="current-left">
          <div className="section-label">
            <span>05</span>
            TODAY
          </div>

          <h2>
            Still
            <br />
            <em>hungry.</em>
          </h2>

          <p>
            ปัจจุบัน Ronaldo ยังคงสวมเสื้อหมายเลข 7
            ให้กับ Al-Nassr และยังคงสร้างสถิติใหม่
            ในช่วงปลายของเส้นทางอาชีพ
          </p>

          <div className="club-badge">
            <div className="badge-circle">
              1955
            </div>

            <div>
              <span>CURRENT CLUB</span>
              <strong>AL-NASSR</strong>
            </div>
          </div>
        </div>

        <div className="current-right">
          <div className="current-stat">
            <span>2025 / 26</span>
            <strong>28</strong>
            <small>LEAGUE GOALS</small>
          </div>

          <div className="current-stat">
            <span>2025 / 26</span>
            <strong>30</strong>
            <small>APPEARANCES</small>
          </div>

          <div className="current-stat">
            <span>2025 / 26</span>
            <strong>2</strong>
            <small>ASSISTS</small>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-cr7">
              CR<strong>7</strong>
            </div>

            <p>
              A digital tribute to one of
              football's greatest legends.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#career">CAREER</a>
            <a href="#legacy">LEGACY</a>
          </div>

          <div className="socials">
            <a href="https://www.instagram.com/cristiano/" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://twitter.com/Cristiano" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>CR7 BIOGRAPHY</span>
          <span>MADE WITH REACT + VITE</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("ronaldoLogin") === "true"
  );

  const logout = () => {
    localStorage.removeItem("ronaldoLogin");
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return <Home onLogout={logout} />;
}

export default App;