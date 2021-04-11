import axios from 'axios';
const url = "/api/posts";

export default class API{

static async getAllPost(){
  const res = await axios.get(url);
  return res.data;
}
static async getPostByIDP(id){
  const res = await axios.get('${url}/${id}');
  return res.data;
}
static async AddPost(post){
  const res = await axios.post(url,post);
  return res.data;
}
static async AddPost(id,post){
  const res = await axios.patch('${url}/${id}',post );
  return res.data;
}
static async deletePost(id){
  const res = await axios.delete('${url}/${id}');
  return res.data;
}

}