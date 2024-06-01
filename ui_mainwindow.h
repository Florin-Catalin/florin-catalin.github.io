/********************************************************************************
** Form generated from reading UI file 'mainwindow.ui'
**
** Created by: Qt User Interface Compiler version 6.5.3
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_MAINWINDOW_H
#define UI_MAINWINDOW_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QGridLayout>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QSpacerItem>
#include <QtWidgets/QSpinBox>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QTextEdit>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_MainWindow
{
public:
    QWidget *centralwidget;
    QWidget *widget;
    QVBoxLayout *verticalLayout;
    QGridLayout *gridLayout;
    QLabel *label_output;
    QHBoxLayout *horizontalLayout_3;
    QLabel *label_info;
    QSpinBox *spinBox_number_words;
    QSpacerItem *horizontalSpacer_6;
    QHBoxLayout *horizontalLayout_2;
    QSpacerItem *horizontalSpacer_16;
    QPushButton *pb_start;
    QPushButton *pb_stop;
    QPushButton *pb_pause;
    QSpacerItem *horizontalSpacer_4;
    QSpacerItem *horizontalSpacer_3;
    QSpacerItem *horizontalSpacer_5;
    QHBoxLayout *horizontalLayout;
    QSpacerItem *horizontalSpacer_14;
    QTextEdit *plainTextEdit_input;
    QSpacerItem *horizontalSpacer_15;
    QSpacerItem *horizontalSpacer;
    QSpacerItem *horizontalSpacer_13;
    QSpacerItem *horizontalSpacer_2;
    QMenuBar *menubar;
    QStatusBar *statusbar;

    void setupUi(QMainWindow *MainWindow)
    {
        if (MainWindow->objectName().isEmpty())
            MainWindow->setObjectName("MainWindow");
        MainWindow->resize(985, 756);
        centralwidget = new QWidget(MainWindow);
        centralwidget->setObjectName("centralwidget");
        widget = new QWidget(centralwidget);
        widget->setObjectName("widget");
        widget->setGeometry(QRect(30, -10, 1296, 558));
        verticalLayout = new QVBoxLayout(widget);
        verticalLayout->setObjectName("verticalLayout");
        verticalLayout->setContentsMargins(0, 0, 0, 0);
        gridLayout = new QGridLayout();
        gridLayout->setObjectName("gridLayout");
        label_output = new QLabel(widget);
        label_output->setObjectName("label_output");
        label_output->setMinimumSize(QSize(300, 60));
        label_output->setMaximumSize(QSize(300, 60));
        QFont font;
        font.setPointSize(20);
        font.setBold(true);
        label_output->setFont(font);
        label_output->setFrameShape(QFrame::Box);
        label_output->setAlignment(Qt::AlignCenter);

        gridLayout->addWidget(label_output, 0, 0, 1, 2);


        verticalLayout->addLayout(gridLayout);

        horizontalLayout_3 = new QHBoxLayout();
        horizontalLayout_3->setObjectName("horizontalLayout_3");
        label_info = new QLabel(widget);
        label_info->setObjectName("label_info");
        label_info->setMinimumSize(QSize(150, 25));
        label_info->setMaximumSize(QSize(150, 25));

        horizontalLayout_3->addWidget(label_info);

        spinBox_number_words = new QSpinBox(widget);
        spinBox_number_words->setObjectName("spinBox_number_words");
        spinBox_number_words->setMinimumSize(QSize(50, 25));
        spinBox_number_words->setMaximumSize(QSize(50, 25));
        spinBox_number_words->setMinimum(60);
        spinBox_number_words->setMaximum(1200);
        spinBox_number_words->setSingleStep(60);

        horizontalLayout_3->addWidget(spinBox_number_words);

        horizontalSpacer_6 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout_3->addItem(horizontalSpacer_6);


        verticalLayout->addLayout(horizontalLayout_3);

        horizontalLayout_2 = new QHBoxLayout();
        horizontalLayout_2->setObjectName("horizontalLayout_2");
        horizontalSpacer_16 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout_2->addItem(horizontalSpacer_16);

        pb_start = new QPushButton(widget);
        pb_start->setObjectName("pb_start");
        pb_start->setMinimumSize(QSize(150, 25));
        pb_start->setMaximumSize(QSize(150, 25));
        QFont font1;
        font1.setBold(true);
        pb_start->setFont(font1);
        pb_start->setCursor(QCursor(Qt::OpenHandCursor));

        horizontalLayout_2->addWidget(pb_start);

        pb_stop = new QPushButton(widget);
        pb_stop->setObjectName("pb_stop");
        pb_stop->setMinimumSize(QSize(150, 25));
        pb_stop->setMaximumSize(QSize(150, 25));
        pb_stop->setFont(font1);
        pb_stop->setCursor(QCursor(Qt::OpenHandCursor));

        horizontalLayout_2->addWidget(pb_stop);

        pb_pause = new QPushButton(widget);
        pb_pause->setObjectName("pb_pause");
        pb_pause->setMinimumSize(QSize(150, 25));
        pb_pause->setMaximumSize(QSize(150, 25));
        pb_pause->setFont(font1);
        pb_pause->setCursor(QCursor(Qt::OpenHandCursor));

        horizontalLayout_2->addWidget(pb_pause);

        horizontalSpacer_4 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout_2->addItem(horizontalSpacer_4);

        horizontalSpacer_3 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout_2->addItem(horizontalSpacer_3);

        horizontalSpacer_5 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout_2->addItem(horizontalSpacer_5);


        verticalLayout->addLayout(horizontalLayout_2);

        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName("horizontalLayout");
        horizontalSpacer_14 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout->addItem(horizontalSpacer_14);

        plainTextEdit_input = new QTextEdit(widget);
        plainTextEdit_input->setObjectName("plainTextEdit_input");
        plainTextEdit_input->setMinimumSize(QSize(800, 350));
        plainTextEdit_input->setMaximumSize(QSize(800, 350));

        horizontalLayout->addWidget(plainTextEdit_input);

        horizontalSpacer_15 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout->addItem(horizontalSpacer_15);

        horizontalSpacer = new QSpacerItem(58, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout->addItem(horizontalSpacer);

        horizontalSpacer_13 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout->addItem(horizontalSpacer_13);

        horizontalSpacer_2 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout->addItem(horizontalSpacer_2);


        verticalLayout->addLayout(horizontalLayout);

        MainWindow->setCentralWidget(centralwidget);
        menubar = new QMenuBar(MainWindow);
        menubar->setObjectName("menubar");
        menubar->setGeometry(QRect(0, 0, 985, 23));
        MainWindow->setMenuBar(menubar);
        statusbar = new QStatusBar(MainWindow);
        statusbar->setObjectName("statusbar");
        MainWindow->setStatusBar(statusbar);

        retranslateUi(MainWindow);

        QMetaObject::connectSlotsByName(MainWindow);
    } // setupUi

    void retranslateUi(QMainWindow *MainWindow)
    {
        MainWindow->setWindowTitle(QCoreApplication::translate("MainWindow", "MainWindow", nullptr));
        label_output->setText(QCoreApplication::translate("MainWindow", "TextLabel", nullptr));
        label_info->setText(QCoreApplication::translate("MainWindow", "Number of Words", nullptr));
        pb_start->setText(QCoreApplication::translate("MainWindow", "Start", nullptr));
        pb_stop->setText(QCoreApplication::translate("MainWindow", "Stop", nullptr));
        pb_pause->setText(QCoreApplication::translate("MainWindow", "Pause", nullptr));
    } // retranslateUi

};

namespace Ui {
    class MainWindow: public Ui_MainWindow {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_MAINWINDOW_H
