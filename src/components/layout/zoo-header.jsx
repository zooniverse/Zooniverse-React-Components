import React from 'react';
import PropTypes from 'prop-types';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import ZooniverseLogo from '../zooniverse-logo';

const MAX_MOBILE_WIDTH = 1080;

class ZooHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      isMobile: false
    };

    this._resizeTimeout = NaN;
  }

  componentDidMount() {
    this.handleResize();
    addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if (!isNaN(this.resizeTimeout)) {
      clearTimeout(this.resizeTimeout);
    }

    this._resizeTimeout = setTimeout(() => {
      this.setState({
        isMobile: innerWidth <= MAX_MOBILE_WIDTH
      }, () => {
        this._resizeTimeout = NaN;
      });
    }, 100);
  }

  createKeyedAnchorItem(navItem, i) {
    return (React.cloneElement(navItem, { key: `navItem-${i}` }));
  };

  render() {
    return (
      <Header justify="between" className="zoo-header" direction="row" size="small" responsive={true}>
        <Menu align="center" direction="row" size="small" responsive={false} inline={true}>
          {this.props.logoHomeLink &&
            this.props.logoHomeLink}
          {!this.state.isMobile &&
            <ul className="zoo-header__nav-list">
              {this.props.mainHeaderNavList.map((navItem, i) =>
                (<li
                  key={`navItem-${i}`}
                  className="zoo-header__nav-list-item zoo-header__nav-list-item--main"
                >
                  {navItem}
                </li>))
              }
              {this.props.isAdmin &&
                <li className="zoo-header__nav-list-item zoo-header__nav-list-item--main">
                  {this.props.adminNavLink}
                </li>}
            </ul>}
        </Menu>
        {this.props.authContainer &&
          this.props.authContainer}
        {this.state.isMobile &&
          <Menu className="zoo-header-menu" icon={<MenuIcon />} dropAlign={{ right: 'right', top: 'top' }}>
            {this.props.mainHeaderNavList.map((navItem, i) => {
              return this.createKeyedAnchorItem(navItem, i);
            })}
            {this.state.isAdmin &&
              this.props.adminNavLink}
          </Menu>}
      </Header>
    );
  }
}

ZooHeader.defaultProps = {
  adminNavLink: <Anchor className="zoo-header__link--small" href="http://www.zooniverse.org/admin"  label="Admin" />,
  authContainer: null,
  isAdmin: false,
  logoHomeLink: <Anchor className="zoo-header__link" href="http://www.zooniverse.org"><ZooniverseLogo height="1.25em" width="1.25em" /></Anchor>,
  mainHeaderNavList: [
    <Anchor className="zoo-header__link--small" href="http://www.zooniverse.org/projects" label="Projects" />,
    <Anchor className="zoo-header__link--small" href="http://www.zooniverse.org/about" label="About" />,
    <Anchor className="zoo-header__link--small" href="http://www.zooniverse.org/get-involved" label="Get Involved" />,
    <Anchor className="zoo-header__link--small" href="http://www.zooniverse.org/talk" label="Talk" />,
    <Anchor className="zoo-header__link--small" href="http://www.zooniverse.org/lab" label="Build A Project" />
  ]
};

ZooHeader.propTypes = {
  adminNavLink: PropTypes.node,
  authContainer: PropTypes.node,
  isAdmin: PropTypes.bool,
  logoHomeLink: PropTypes.node.isRequired,
  mainHeaderNavList: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default ZooHeader;
