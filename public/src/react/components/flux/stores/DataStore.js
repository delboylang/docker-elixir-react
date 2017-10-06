import alt          from '../alt/alt.js';
import DataActions  from '../actions/DataActions.js';

class DataStore {
    constructor() {
        console.log("ivoked");
        this.data = {};

        this.bindListeners({
            // Listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:         this.getAll,
            getAllPages:    this.getAllPages,
            getAllPosts:    this.getAllPosts,
            getPageBySlug:  this.getPageBySlug,
            getHomePage:    this.getHomePage
        });
    }

    // Store data returned by getSuccess() in DataActions.js
    handleSuccess(data) {
        this.setState({ data });
    }

    // Returns all pages and posts
    getAll() { 
        return this.getState().data; 
    }

    // Returns all Pages
    getAllPages() {
console.log("get ALL pages");
        return this.getState().data.pages; 
    }

    // Returns all Posts
    getAllPosts() {
console.log("here");
        return this.getState().data.posts; 
    }

    // Get home page
    getHomePage() {
        return this.getState().data.posts;
    }
    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

}

export default alt.createStore(DataStore, 'DataStore');