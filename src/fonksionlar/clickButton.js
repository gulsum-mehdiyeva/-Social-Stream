import getData from './getData.js';
function clickButton(setPosts, setLoading, setError){
  getData(setPosts, setLoading, setError);
}
export default clickButton;