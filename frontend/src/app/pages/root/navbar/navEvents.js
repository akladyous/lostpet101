class Root extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e) {
        const navbar = document.querySelector('.navbar');
        if (document.scrollingElement.scrollTop > 50) {
            // debugger
            navbar.classList.add('sticky-top');
        } else {
            navbar.classList.remove('sticky-top');
        }
    }

    activeNavItem(e) {
        e.preventDefault();
        e.target.parentNode.childNodes.forEach((anchorTag) =>
            anchorTag.classList.remove('active')
        );
        e.target.classList.add('active');
        const target = document.querySelector(e.target.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        // console.log("target : ", target)
        // console.log("targetPosition : ", targetPosition)
        // console.log("screenPosition : ", screenPosition)
        // debugger
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: targetPosition - 100,
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document
            .querySelectorAll('.navbar-nav a')
            .forEach((item) =>
                item.addEventListener('click', this.activeNavItem)
            );
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return <App />;
    }
}

export default Root;
