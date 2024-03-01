
"默认文件夹
cd D:\CodeFlow\VimCode
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
""                      "Shortcut"                      ""
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
""" keymap setting
inoremap fj <ESC> "use key binding to enter normal mode
nnoremap <SPACE> <Nop>
let g:mapleader=" "
" Normal mode remappingshttps://github.com/ayamir/nvimdots
nnoremap <F4> :bd<CR>
nnoremap <F6> :sp<CR>:terminal<CR>
" Tabs
nnoremap <S-Tab> gT
nnoremap <Tab> gt
nnoremap <silent> <S-t> :tabnew<CR>


" Font
set guifont =Hack:h25
set fileencodings=utf-8,gbk2312,gbk,gb18030,cp936
set encoding=utf-8
"Font setup with mouse wheel
let s:fontsize = 25
function! AdjustFontSize(amount)
  let s:fontsize = s:fontsize+a:amount
  :execute "GuiFont! Hack:h" . s:fontsize
endfunction

noremap <C-ScrollWheelUp> :call AdjustFontSize(1)<CR>
noremap <C-ScrollWheelDown> :call AdjustFontSize(-1)<CR>
inoremap <C-ScrollWheelUp> <Esc>:call AdjustFontSize(1)<CR>
inoremap <C-ScrollWheelDown> <Esc>:call AdjustFontSize(-1)<CR>

"vmap <c-c> "+y
"map <c-v> "+p

" close current tab without save
"nmap <Leader>q :q<CR>
" save file on the current tab
"nmap <Leader>w :w<CR>
" save files on all the tabs and quit nvim
nmap <Leader>WQ :wa<CR>:q<CR>
" quit without any saving action
nmap <Leader>Q :qa!<CR>

""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
""                   "Common Setting"                   ""
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" Options
set background =dark
"enable the clipboard between Neovim and other applications
"set clipboard +=unnamedplus 
set clipboard =unnamedplus 
set completeopt =noinsert,menuone,noselect
set cursorline  "highlights the current line
set hidden  "hide unsused buffers
set inccommand =split ""show replacements in a split screen, before applying to the file
set mouse =a "allows the use of the mouse in the editor
set number ""shows line number
set relativenumber ""Useful for using multiline commands
set autoindent
set smartindent
set incsearch
set spell
set spelllang =en

""" set splitbelow splitright ""changes split screen behavior with the command :split
set title
set ttimeoutlen =0 "time in milliseconds to run commands
set wildmenu "shows a more advanced menu for auto-completion suggestions

" Tab size
set expandtab "transforms tabs into spaces
set shiftwidth=2 "number of spaces for indentation
set tabstop=2 "number of spuaces for tabs

syntax on
syntax enable
"synced when file changed by another appliction
set autoread
set hlsearch

"filetype off
set shellslash
set encoding=utf-8
set fileencoding=utf-8
set fileencodings=ucs-bom,utf-8,cp936
set syntax=on
set autoindent
set smartindent
""" tab setting
""" insert spaces with the tab character
set expandtab
"the amount of space to shift in 'normal' mode
set shiftwidth=4
"the amount of spaces the tab character will fill
set tabstop=4
"the amount of spaces to shift in insert mode with tab key
"default to the same as tabstop
set softtabstop=4

" Allow backspacing over everything in insert mode.
set backspace=indent,eol,start

set history=200		" keep 200 lines of command line history
set ruler		" show the cursor position all the time
set showcmd		" display incomplete commands
set wildmenu		" display completion matches in a status line

set ttimeout		" time out for key codes
set ttimeoutlen=100	" wait up to 100ms after Esc for special key

" Show @@@ in the last line if it is truncated.
set display=truncate

" Show a few lines of context around the cursor.  Note that this makes the
" text scroll if you mouse-click near the start or end of the window.
set scrolloff=5
set lines=45 columns=108
set wrap
set textwidth=72
" Set 'formatoptions' to break comment lines but not other lines,
" and insert the comment leader when hitting <CR> or using "o".
setlocal fo-=t fo+=croql
" set linebreak  "回车换行

""" Language input swtich disabled
"set imdisable
set iminsert=0
"set linebreak
set number
set relativenumber
set showmatch
"show the matching paren
set matchtime=5
set encoding=UTF-8
"""""""""""""""""""""""""""""""""""""""
" Set Default Search highlighting on  "
"""""""""""""""""""""""""""""""""""""""
set hlsearch
set incsearch
"set nohlsearch
"set noincsearch
""""""""""""""""""""""""""""""""""""""""""""""""""""
"   The Tab character to <Ctrl-v> → unicode u2192  "
"                                                  "
"   The End character to <Ctrl-v> ↲ unicode u21b2  "
"					           "
""""""""""""""""""""""""""""""""""""""""""""""""""""
"set list
set listchars=tab:→\ ,eol:$

""""""""""""""""""""""""""""""""""""
"""""" yaml             """"""""""""
""""""""""""""""""""""""""""""""""""
autocmd FileType yaml setlocal ts=2 sts=2 sw=2 expandtab

set foldlevelstart=20
