import path from 'path'

if (typeof require === 'undefined') {
    /**
     * @note
     * @deprecated
     * while after switching to es6 modules node.js org deprecated global __dirname
     * variable we have to set it manually for providing illusion of backwards compatibility.
     * while path.resolve() gives path to index file __dirname will be path to
     * project absolute root.
     * this lines of code has two main purposes:
     *   1) Tell IDE that __dirname is deprecated
     *   2) Provide some sort of backwards compatibility
     */

    global.__dirname = path.resolve();

    /**
     * @note
     * @deprecated
     * while after switching to es6 modules node.js org deprecated global __filename
     * variable and we cannot provide a real polyfill for it using es6 modules toolkit
     * the only thing possible here is to drop it to null forcely.
     */
    global.__filename = null;

    /**
     * this var sets project root
     */
    global.__projectDIR = path.resolve();
}