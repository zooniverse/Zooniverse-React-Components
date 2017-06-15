'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdownz = require('markdownz');

var _simpleAvatar = require('../images/simple-avatar.png');

var _simpleAvatar2 = _interopRequireDefault(_simpleAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TalkMarkdownHelp = function TalkMarkdownHelp() {
  return _react2.default.createElement(
    'table',
    null,
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          { colSpan: '2' },
          'Zooniverse Hashtags, Users and Subjects'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Add a Hashtag'
        ),
        _react2.default.createElement(
          'td',
          null,
          '#hashtag'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Mention User'
        ),
        _react2.default.createElement(
          'td',
          null,
          '@user'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Mention Subject',
          _react2.default.createElement('br', null),
          '(project Talk)'
        ),
        _react2.default.createElement(
          'td',
          null,
          '^S',
          _react2.default.createElement('subject_id', null),
          _react2.default.createElement('br', null),
          'e.g. ^S830273'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Mention Subject',
          _react2.default.createElement('br', null),
          '(any Talk)'
        ),
        _react2.default.createElement(
          'td',
          null,
          '@owner/project^S',
          _react2.default.createElement('subject_id', null),
          _react2.default.createElement('br', null),
          'e.g. @zooniverse/wildcam-gorongosa^S830273'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Mention',
          _react2.default.createElement('br', null),
          'Project Teams'
        ),
        _react2.default.createElement(
          'td',
          null,
          '@admins - mention the project administrators',
          _react2.default.createElement('br', null),
          '@moderators - mention the project moderators',
          _react2.default.createElement('br', null),
          '@researchers or @scientists - mention the project researchers',
          _react2.default.createElement('br', null),
          '@team - mention the entire Zooniverse team'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          { colSpan: '2' },
          'Adding Emoji to Posts'
        )
      ),
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          'Complete',
          _react2.default.createElement('br', null),
          'Emoji List'
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'a',
            { href: 'http://www.emoji-cheat-sheet.com/', rel: 'noopener noreferrer', target: '_blank' },
            'use this website for all supported emoji'
          )
        )
      )
    )
  );
};

var MarkdownHelp = function MarkdownHelp(_ref) {
  var title = _ref.title,
      talk = _ref.talk;

  var bulletedList = '\n  - item one\n  - item two\n  - item three\n  ';

  var numberedList = '\n  1. item one\n  2. item two\n  3. item three\n  ';

  var nestedList = '\n  - item one\n    - item two\n      - item three\n  - item four\n  ';

  var headers = '\n  # header1\n  ## header2\n  ### header3\n  ';

  var avatarImage = '![imagealttext](' + _simpleAvatar2.default + ')';
  var avatarImageResized = '![imagealttext](' + _simpleAvatar2.default + ' =75x75)';

  return _react2.default.createElement(
    'div',
    { className: 'markdown-editor-help' },
    _react2.default.createElement(
      'table',
      null,
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            { colSpan: '3' },
            _react2.default.createElement(
              'h1',
              { className: 'markdown-editor-title' },
              title
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            { colSpan: '3' },
            _react2.default.createElement(
              'p',
              null,
              'Utilizing a slightly customized version of ',
              _react2.default.createElement(
                'a',
                { href: 'http://daringfireball.net/projects/markdown/basics', rel: 'noopener noreferrer', target: '_blank' },
                'Markdown'
              ),
              '.'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Style'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Type'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Result'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Bold'
          ),
          _react2.default.createElement(
            'td',
            null,
            '**bold** ',
            _react2.default.createElement(
              'em',
              null,
              'or'
            ),
            ' __bold__'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '**bold** _or_ __bold__'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Italics'
          ),
          _react2.default.createElement(
            'td',
            null,
            '*italics* ',
            _react2.default.createElement(
              'em',
              null,
              'or'
            ),
            ' _italics_'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '*italics* _or_ _italics_'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Bold Italics'
          ),
          _react2.default.createElement(
            'td',
            null,
            '**_bolditalics_**'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '**_bolditalics_**'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Superscript'
          ),
          _react2.default.createElement(
            'td',
            null,
            '^superscript^',
            _react2.default.createElement('br', null),
            '^super\\ script^'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '^superscript^'
            ),
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '^super\\ script^'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Subscript'
          ),
          _react2.default.createElement(
            'td',
            null,
            '~subscript~',
            _react2.default.createElement('br', null),
            '~sub\\ script~'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '^subscript^'
            ),
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '~sub\\ script~'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Hyperlink'
          ),
          _react2.default.createElement(
            'td',
            null,
            '[zooniverse](http://www.zooniverse.org)'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '[zooniverse](http://www.zooniverse.org)'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Hyperlink',
            _react2.default.createElement('br', null),
            '(new tab)'
          ),
          _react2.default.createElement(
            'td',
            null,
            '[zooniverse](+tab+http://www.zooniverse.org)'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '[zooniverse](+tab+http://www.zooniverse.org)'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Bulleted List'
          ),
          _react2.default.createElement(
            'td',
            null,
            '- item one',
            _react2.default.createElement('br', null),
            '- item two',
            _react2.default.createElement('br', null),
            '- item three'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              bulletedList
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Numbered List'
          ),
          _react2.default.createElement(
            'td',
            null,
            '1. item one',
            _react2.default.createElement('br', null),
            '2. item two',
            _react2.default.createElement('br', null),
            '3. item three'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              numberedList
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Nested List'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'span',
              null,
              '- item one'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              null,
              '\xA0\xA0- item two'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              null,
              '\xA0\xA0\xA0\xA0- item three'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              null,
              '- item four'
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              nestedList
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Quoted Text /',
            _react2.default.createElement('br', null),
            'Blockquote'
          ),
          _react2.default.createElement(
            'td',
            null,
            '> Quoted text.'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '> Quoted text.'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Header'
          ),
          _react2.default.createElement(
            'td',
            null,
            '# header1',
            _react2.default.createElement('br', null),
            '## header2',
            _react2.default.createElement('br', null),
            '### header3',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'em',
              null,
              'etc., up to six # symbols'
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              headers
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Code Blocks'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'span',
              null,
              '`code block`'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement(
                'em',
                null,
                'or with four (4) spaces before (and optionally, after)'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'span',
              null,
              '\xA0\xA0\xA0\xA0code block\xA0\xA0\xA0\xA0'
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '`code block`'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Strikethrough'
          ),
          _react2.default.createElement(
            'td',
            null,
            '~~strikethrough~~'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '~~strikethrough~~'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Image'
          ),
          _react2.default.createElement(
            'td',
            null,
            '![imagealttext](/assets/simple-avatar.png)',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'em',
              null,
              'images must already be uploaded; use ',
              _react2.default.createElement(
                'a',
                { href: 'http://imgur.com/', rel: 'noopener noreferrer', target: '_blank' },
                'imgur'
              ),
              ' to host new images'
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              avatarImage
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Resized Image'
          ),
          _react2.default.createElement(
            'td',
            null,
            '![imagealttext](../../src/images/simple-avatar.png =MxN)',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'em',
              null,
              'M is width in pixels, N is height in pixels'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'em',
              null,
              'constrain by ommitting one value, e.g.: =75x or =x75'
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              avatarImageResized
            ),
            'sample set @ 75x75'
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Horizontal Line'
          ),
          _react2.default.createElement(
            'td',
            null,
            '--- ',
            _react2.default.createElement(
              'em',
              null,
              'or'
            ),
            ' *** ',
            _react2.default.createElement(
              'em',
              null,
              'or'
            ),
            ' ___'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              _markdownz.Markdown,
              null,
              '---'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'Tables'
          ),
          _react2.default.createElement(
            'td',
            { colSpan: '2' },
            _react2.default.createElement(
              'a',
              { href: 'http://www.tablesgenerator.com/markdown_tables', rel: 'noopener noreferrer', target: '_blank' },
              'use this website to generate markdown tables'
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            'URL Shortening'
          ),
          _react2.default.createElement(
            'td',
            { colSpan: '2' },
            'URLs can be written as /projects/username/projectname and /projects/username/projectname/pagename, omitting the "https://www.zooniverse.org."'
          )
        )
      )
    ),
    talk && _react2.default.createElement(TalkMarkdownHelp, null),
    _react2.default.createElement(
      'p',
      null,
      'If you need any more help formatting posts, please ask on the ',
      _react2.default.createElement(
        'a',
        { href: 'https://www.zooniverse.org/talk/' },
        'Zooniverse Talk'
      ),
      ' boards!'
    )
  );
};

MarkdownHelp.defaultProps = {
  talk: false,
  title: 'Guide to using Markdown'
};

MarkdownHelp.propTypes = {
  talk: _react2.default.PropTypes.bool,
  title: _react2.default.PropTypes.string
};

exports.default = MarkdownHelp;