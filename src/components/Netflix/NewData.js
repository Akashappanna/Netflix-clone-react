import Slider from 'infinite-react-carousel';

export default className CustomSlider extends Component {
  render() {
    const settings =  {
      arrowsScroll: 6,
      autoplay: true,
      autoplayScroll: 2,
      autoplaySpeed: 4000,
      duration: 400,
      shift: 100,
      slidesPerRow: 4,
      virtualList: true,
      wheel: true
    };
    return (
      <div>
        <span>CustomSlider</span>
        <Slider { ...settings }>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
          <div>
            <h3>11</h3>
          </div>
          <div>
            <h3>12</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>
          <div>
            <h3>14</h3>
          </div>
          <div>
            <h3>15</h3>
          </div>
          <div>
            <h3>16</h3>
          </div>
          <div>
            <h3>17</h3>
          </div>
          <div>
            <h3>18</h3>
          </div>
          <div>
            <h3>19</h3>
          </div>
          <div>
            <h3>20</h3>
          </div>
        </Slider>
      </div>
    );
  }
}