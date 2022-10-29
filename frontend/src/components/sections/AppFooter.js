import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

const footerLinks = [
    { title: "GitHub", link: "https://github.com/Mathias007" },
    { title: "Portfolio", link: "https://mathias.net.pl" },
    { title: "eGildia", link: "https://egildia.pl" },
    { title: "Kontakt", link: "mailto:matstawowski@gmail.com" },
];

const generateFooterLinks = (linksArr) => {
    return linksArr.map((linkData) => {
        const { title, link } = linkData;

        return (
            <li key={link} className="nav-item">
                <a
                    href={link}
                    className="nav-link text-muted"
                    target="_blank"
                    rel="noreferrer"
                >
                    {title}
                </a>
            </li>
        );
    });
};

function AppFooter() {
    return (
        <Footer>
            <Row className="just">
                <Col xs={24} md={12} lg={12}>
                    <div className="copyright">
                        Copyright © 2022, created by
                        <strong> Mateusz Mathias Stawowski</strong>. All rights
                        reserved.
                    </div>
                </Col>
                <Col xs={24} md={12} lg={12}>
                    <div className="footer-menu">
                        <ul>{generateFooterLinks(footerLinks)}</ul>
                    </div>
                </Col>
            </Row>
        </Footer>
    );
}

export default AppFooter;
